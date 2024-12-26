/// <reference types="cypress" />

//Executes TS_0003 - Sign Out

//TC_SO_001
describe("TC_SO_001 Validate user SignOut after being signed-in.", () => {

    it("User should Visit SignIn page", () => {
        cy.visit("http://localhost:3000/signin");
  
    })
    it("successfully submit account details and sign in", () => {
        cy.get('#email').type("test4@gmail.com");
        cy.get('#password').type("1234567");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click({force: true});
        cy.wait(1000)
    })
    it("User should be able to see Sign Out button", () => {
        cy.get('.MuiButton-colorInherit > .MuiButton-label').should('include.text', 'Sign out');
    })
    it("User should be able to Sign Out from his logged profile", () => {
        cy.get('.MuiButton-colorInherit > .MuiButton-label').click({force: true});
    })
  })
  //End of TC_SO_001

//######################################################################################################################### */

//TC_SO_002
describe("TC_SO_002 Validate user SignOut from the EXPENSES page after being signed-in.", () => {

    it("User should Visit SignIn page", () => {
        cy.visit("http://localhost:3000/signin");
  
    })
    it("successfully submit account details and sign in", () => {
        cy.get('#email').type("test4@gmail.com");
        cy.get('#password').type("1234567");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click({force: true});
        cy.wait(1000)
    })
    it("User navigate to EXPENSES page", () => {
        cy.log("in home page, click on EXPENSES navbar button");
        cy.get('[href="/expenses/all"] > .MuiButtonBase-root').click({force: true});
    })
    it("User should be able to see Sign Out button", () => {
        cy.get('.MuiButton-colorInherit > .MuiButton-label').should('include.text', 'Sign out');
    })
    it("User should be able to Sign Out from Expenses Page", () => {
        cy.get('.MuiButton-colorInherit > .MuiButton-label').click({force: true});
    })
  })
  //End of TC_SO_002

//######################################################################################################################### */

//TC_SO_003        
describe("TC_SO_003 Validate user SignOut from the REPORTS page after being signed-in.", () => {

    it("User should Visit SignIn page", () => {
        cy.visit("http://localhost:3000/signin");
    })
    it("successfully submit account details and sign in", () => {
        cy.get('#email').type("test4@gmail.com");
        cy.get('#password').type("1234567");
        cy.get('span').contains('Submit').click({force: true});
        cy.wait(1000)
    })
    it("User navigate to REPORTS page", () => {
        cy.log("in home page, click on REPORTS navbar button");
        cy.get('[href="/expenses/reports"] > .MuiButtonBase-root').click({force: true});
    })
    it("User should be able to see Sign Out button", () => {
        cy.get('.MuiButton-colorInherit > .MuiButton-label').should('include.text', 'Sign out');
    })
    it("User should be able to Sign Out from Expenses Page", () => {
        cy.get('.MuiButton-colorInherit > .MuiButton-label').click({force: true});
    })
})//End of TC_SO_003

//######################################################################################################################### */

//TC_SO_004        
describe("TC_SO_004 Validate user SignOut from the ADD EXPENSE page after being signed-in.", () => {

    it("User should Visit SignIn page", () => {
        cy.visit("http://localhost:3000/signin");
    })
    it("successfully submit account details and sign in", () => {
        cy.get('#email').type("test4@gmail.com");
        cy.get('#password').type("1234567");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click({force: true});
        cy.wait(1000)
    })
    it("User navigate to ADD EXPENSE page", () => {
        cy.log("in home page, click on ADD EXPENSE navbar button");
        cy.get('[href="/expenses/new"] > .MuiButtonBase-root').click({force: true});
        cy.url().should('eq','http://localhost:3000/expenses/new')
    })
    it("User should be able to see Sign Out button", () => {
        cy.get('.MuiButton-colorInherit > .MuiButton-label').should('include.text', 'Sign out');
    })
    it("User should be able to Sign Out from Expenses Page", () => {
        cy.get('.MuiButton-colorInherit > .MuiButton-label').click({force: true});
    })
})//End of TC_SO_004

//######################################################################################################################### */