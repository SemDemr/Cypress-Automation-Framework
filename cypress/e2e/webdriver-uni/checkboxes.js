/// <reference types = "cypress" />


describe("Verify checkboxes", () => {
    it("Check and validate checkbox", () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true });
        // cy.get('#checkboxes > :nth-child(1) > input').check()
        // cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        cy.get('@option-1').check()
        cy.get('@option-1').check().should('be.checked')
    })
    it("Uncheck and validate checkbox", () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true });
        // cy.get('#checkboxes > :nth-child(1) > input').check()
        // cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
        cy.get(':nth-child(7) > input').as('option-4')
        cy.get('@option-4').check()
       // cy.get('@option-4').uncheck()
        cy.get('@option-4').uncheck().should('not.be.checked')
    })
    
    it.only("Check multiple checkboxes", () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true });
        // cy.get('#checkboxes > :nth-child(1) > input').check()
        // cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
        cy.get('input[type="checkbox"]').check(["option-1", 'option-2']).should('be.checked')
    

    })











})