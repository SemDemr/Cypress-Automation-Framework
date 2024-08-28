/// <reference types = "cypress" />
/// //<reference types = "cypress-xpath" />

describe("Test Contact Us form via Automation Test Store", () => {
    it('Should be able to submit a successful submission via contact us form', () => {
        cy.visit("https://www.automationteststore.com/");
        //cy.xpath('//a[contains(@href,"contact")]').click()
        cy.get('a[href$="contact"]').click().then((itemHeaderText) => {   //linkText
            cy.log("Clicked the following item: " + itemHeaderText.text())
        })
        cy.get('#ContactUsFrm_first_name').type("Donald")
        cy.get('#ContactUsFrm_email').type("donald@test.com")
        cy.get('#ContactUsFrm_enquiry').type("hello dear")
        //cy.get('.col-md-6 > .btn').click()
        cy.get('button[title="Submit"]').click()
        //cy.get('.mb40 > :nth-child(3)').should("contain", 'Your enquiry has been successfully sent to the store owner!')
        cy.get('.mb40 > :nth-child(3)').should("have.text", 'Your enquiry has been successfully sent to the store owner!')
        //console.log("Test has completed!")
        cy.log("Test has completed!")

    });

});

