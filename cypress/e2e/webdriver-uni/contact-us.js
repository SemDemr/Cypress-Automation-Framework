/// <reference types = "cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {

        // cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html") //modified and open the new tab in the same new browser
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true }) //removed target attr with jquery remove Attr method 
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')

        //cy.get('#contact-us').click({force:true})
        cy.get('[name="first_name"]').type("John")
        cy.get('[name="last_name"]').type("Smith")
        cy.get('[name="email"]').type("jsimith@test.com")
        cy.get('textarea.feedback-input').type("Hello Cypress! It's me! ")
        cy.get('[type="submit"]').click({ force: true })
        //cy.get('h1').should('contain', 'Thank You for your Message!')
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    });

    it("Should not be able to submit a successful submission via contact us form as all field are required", () => {
        //cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")

        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
        cy.get('[name="first_name"]').type("John")
        cy.get('[name="last_name"]').type("Smith")
        cy.get('[name="email"]').type("jsmith.test")
        cy.get('textarea.feedback-input').type("Hello Cypress! It's me! ")
        cy.get('[type="submit"]').click({ force: true })
        cy.get('body').should('contain', 'Error: Invalid email address')



    });

})
