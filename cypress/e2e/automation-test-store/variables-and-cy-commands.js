/// <reference types="cypress" />
describe('Verifying variables, cypress commands and jquery commands', () => {
    it('Navigating to specific product pages', () => {
        cy.visit("https://automationteststore.com/")

        //The following will fail
        // const makeupLink = cy.get('a[href*="product/category&path="]').contains("Makeup")
        //const skincareLink = cy.get('a[href*="product/category&path="]').contains("Skincare")
        //makeupLink.click()
        //skincareLink.click()


        //The following will pass but not recommended
        //const makeupLink = cy.get('a[href*="product/category&path="]').contains("Makeup")
        //makeupLink.click()
        //const skincareLink = cy.get('a[href*="product/category&path="]').contains("Skincare")
        //skincareLink.click()


        //Recommended approach
        cy.get('a[href*="product/category&path="]').contains("Makeup").click()
        

        //following code will fail
        // const header = cy.get("h1 .maintext")
        // cy.log(header.text()) //not working

        //cy.get('a[href*="product/category&path="]').contains("Skincare").click()

        cy.get("h1 .maintext").then(($headerText) => {    //js promising
            const headerText = $headerText.text()  //we are using jquery text() method here
            cy.log("Found header text: " + headerText)
            expect(headerText).is.eq('Makeup') //chai assertion
        })





    });

    it.only('Validate properties of the Contact Us Page', () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")

        //Uses cypress commands and chaining
        cy.contains('#ContactUsFrm','Contact Us Form').find('#field_11').should('contain','First name:')

        //JQuery Approach
        cy.contains('#ContactUsFrm','Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')
       
            //Embeded commands (Closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text())
                cy.log(fnText) // this one is not returning with text it is returning with element location
            })

       
        })



        

    })




});