/// <reference types = "Cypress" />

describe("Test Contact Us form via WebdriverUni" , () =>{
    it.only("Should be able to submit a successful submission via contact us form" , () => {

        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.get('#contact-us').click({force:true})
        cy.get('[name="first_name"]').type("John")
        cy.get('[name="last_name"]').type("Smith")
        cy.get('[name="email"]').type("jsimith@test.com")
        cy.get('textarea.feedback-input').type("Hello Cypress! It's me! ")
        cy.get('[type="submit"]').click({force:true})
        cy.get('h1').should('contain','Thank You for your Message!')
    });

    it("Should not be able to submit a successful submission via contact us form as all field are required" , () => {

        //cypress code

    });

})
