class abnInvalidpage {

    // Elements
   
    // Methods
    
    static checkPage(){
        cy.title().should('include', "Invalid ABN")
        
   }

    static validateErrors(entityName){
        cy.get('h2').should('contain', "The number entered is not a valid ABN")
        cy.get('p').should('contain', "The number entered (",entityName,") is not a valid ABN. See format of the ABN for more information.")

        cy.contains('a','format of the ABN').scrollIntoView().should('have.attr', 'href').and('include', '/Help/AbnFormat?SearchText='+entityName)
        cy.contains("a","advanced search").scrollIntoView().should("have.attr", "href").and("include", "/Search/AdvancedWithParams?SearchText="+entityName)
        cy.contains("a","frequently asked questions").scrollIntoView().should("have.attr", "href", "/Faq")
        
        //expect(cy.get('a').should('contain','frequently asked questions')) 
    }
}

export default abnInvalidpage