class abnLookupPage {
    
    // Methods
    
    // Note: This method is not used in the test
    static abnLookupPage(entityName){
        cy.visit('/Search/ResultsActive?SearchText='+entityName)
        cy.title().should('include', "Search results - active ABNs and names | ABN Lookup")
    }

    static findABN(entityName){
        
        cy.get('table tbody tr td:nth-child(2)').each(($abnname, index)=> {
            const text = $abnname.text().trim().toLowerCase()
            
            if(text.includes(entityName.toLowerCase())) {
                cy.log("Found link of "+entityName+" on row: " + index)
                cy.wrap($abnname).parent().find('td:nth-child(1) a').click()
                cy.title().should('include', "Current details for ABN")
                return false
            }else {
                cy.log("No ABN link found for entity: "+entityName)
            }
        }) 
    }

}

export default abnLookupPage