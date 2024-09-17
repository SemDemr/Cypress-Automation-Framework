/// <reference types = "cypress" />


describe("Interact with dropdown lists", () => {
    it("Select specific values via select dropdown lists", () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true });
        cy.get('#dropdowm-menu-1').select('JAVA').should('have.value', 'java')
        cy.get('#dropdowm-menu-2').select('testng').should('contain', 'TestNG')
        cy.get('#dropdowm-menu-3').select('javascript').contains('JavaScript')
    })

    it("Select specific texts via select dropdown lists", () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true });
        cy.get('#dropdowm-menu-1').select('JAVA')
        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
        cy.get('#dropdowm-menu-2').select('testng').contains('TestNG')
    })








})