/// <reference types = "Cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
    it('Should be able to submit a successful submission via contact us form', () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get('.info_links_footer > :nth-child(5) > a').click()
        cy.get('#ContactUsFrm_first_name').type("Donald")
        cy.get('#ContactUsFrm_email').type("donald@test.com")
        cy.get('#ContactUsFrm_enquiry').type("hello dear")
        cy.get('.col-md-6 > .btn').click()
        cy.get('.mb40 > :nth-child(3)').should("contain",'Your enquiry has been successfully sent to the store owner!')

    });

});

