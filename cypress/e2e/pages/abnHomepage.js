class abnHomepage {

    // Note: Pending to replace elements in below code and add similar in other pages
    elements = {
        searchBox: () => cy.get('#SearchText'),
        searchButton: () => cy.get('#MainSearchButton')
    }

    static abnHomepage(){
        cy.visit('') // visiting ABN lookup portal
        cy.title().should('include', "ABN Lookup")
    }
    
    // replace elements in below code
    static searchABN(entityName){
        cy.get('#SearchText').type(entityName)
        cy.get('#MainSearchButton').click()
    } 
}

export default abnHomepage