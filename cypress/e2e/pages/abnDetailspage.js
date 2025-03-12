class abnDetailspage {
    
    // Methods
    
    // Note: This method is not used in the test
    static abnDetailspage(abnNo){
        cy.visit('/ABN/View?abn='+abnNo)
        cy.title().should('include', "Current details for ABN")
    }
    
    static validateEntitydetails(entityName){
        let filename = 'cypress/fixtures/entity/'+entityName+'.json'
        cy.readFile(filename).then((fileData) => {
            // validate page metadata
            cy.title().should('include', fileData.pagetitle)
            this.validateABNdetails(fileData.ABNdetails)
            if(fileData.hasOwnProperty('BusinessNames') && fileData.BusinessNames.length > 0){ this.validateBusinessNames(fileData.BusinessNames) }
            })
    }

    static validateABNdetails(entityDetails){
        // validate ABN details
        cy.get('table ').eq(0).within(() => {
            cy.get('tbody tr th').each(($ele)=> {
                const text = $ele.text().trim()
                cy.log("Validating ",text," in ABN details")
                if(text.includes('Entity name')){
                    cy.wrap($ele).next().should('contain', entityDetails.name)
                }
                if(text.includes('ABN status')){
                      cy.wrap($ele).next().invoke('text').then((text) => {
                      // remove the space char
                       expect(text.replace(/\u00a0/g, ' ').trim()).equal(entityDetails.status)
                      })
                }
                if(text.includes('Entity type')){
                    cy.wrap($ele).next().should('contain', entityDetails.type)
                }
                if(text.includes('Goods & Services Tax')){
                    cy.wrap($ele).next().invoke('text').then((text) => {
                      // remove the space char
                       expect(text.replace(/\u00a0/g, ' ').trim()).equal(entityDetails.gst)
                      })
                }
                if(text.includes('business location')){
                    cy.wrap($ele).next().should('contain', entityDetails.location)
                }        
            })
        })
    }

    static validateBusinessNames(businessNames){
        // validate Business names
        for (var i=0; i < businessNames.length; i++) {
            let bname = businessNames[i].name
            let bdate = businessNames[i].date
            cy.get('tbody').eq(1).within(() => {
                cy.get('tr td:nth-child(1)').each(($row)=> {
                    cy.wrap($row).invoke('text').then((text) => {
                        if(text.includes(bname)){
                            cy.wrap($row).next().invoke('text').then((text) => {
                                // remove the space char
                                 expect(text.replace(/\u00a0/g, ' ').trim()).includes(bdate)
                                })  
                        }
                    }) 
                })
            }) 
         }
    }

    static downloadPdf(abnNo){

        // handle timeout error
        cy.get('.inputpdf').click()
       
        cy.task('isExistPDF', 'ABNCurrentDetails_'+abnNo+'.pdf').should('equal', true);
        
    } 
}

export default abnDetailspage