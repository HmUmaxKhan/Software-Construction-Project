/// <reference types="cypress" />

//Executes TS_0002 - Sign In 

//TC_SI_001
describe("TC_SI_001 Validate Sign-In an Account by providing only the Mandatory fields with existing account", () => {

    it("User should be directed to the SIGN IN page", () => {
        cy.visit("http://localhost:3000/signin");
  
    })
    it("successfully submit account details and sign in", () => {
        cy.get('#email').type("test4@gmail.com");
        cy.get('#password').type("1234567");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click({force: true});
        cy.wait(1000);
    })
    it("User should see the text 'You've spent' on the dashboard", () => {
      // Wait for the element to appear and verify its content
      cy.get('h4.MuiTypography-root.MuiTypography-h4.MuiTypography-colorTextPrimary', { timeout: 10000 })
        .should('be.visible') // Ensure the element is visible
        .and('contain.text', "You've spent"); // Verify it contains the expected text
    });
  })
//End of TC_SI_001

//######################################################################################################################### */
//
//TC_SI_002
describe("TC_SI_002 Validate Sign-In an Account by providing only the Mandatory fields with existing account", () => {

    it("User should be directed to the SIGN IN page", () => {
        cy.visit("http://localhost:3000/signin");
  
    })
    it("unsuccessfully submit account details", () => {
        cy.get('#email').type("userb@gmail.com");
        cy.get('#password').type("111111111");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click({force: true});
        cy.wait(1000);
    })
    it("should display an error message when email or password is incorrect", () => {
      cy.get('p.MuiTypography-root.MuiTypography-body1.MuiTypography-colorError', { timeout: 10000 })
        .should('be.visible') // Ensure the element is visible
        .and('contain.text', "Email or password don't match."); // Verify the error message text
    });
    
  })  
//End of TC_SI_002

//######################################################################################################################### */

//TC_SI_003
describe("TC_SI_003 Validate Sign-In error message when user providing only registered Password field.", () => {

    it("User should be directed to the SIGN IN page", () => {
        cy.visit("http://localhost:3000/signin");
  
    })
    it("unsuccessfully submit account details", () => {
        cy.get('#password').type("12345678");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click({force: true});
    })
    it("after submit account details error message appear Email or password don\'t match.", () => {
        cy.get('.MuiTypography-body1').should('include.text', 'Sorry, User not found');
    })
  })//End of TC_SI_003

//######################################################################################################################### */

//TC_SI_004
describe("TC_SI_004 Validate Sign-In error message when user providing unregistered account details.", () => {

    it("User should be directed to the SIGN IN page", () => {
        cy.visit("http://localhost:3000/signin");
  
    })
    it("unsuccessfully submit account details", () => {
        cy.get('#email').type("yada@gmail.com")
        cy.get('#password').type("12345678");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click({force: true});
    })
    it("after submit account details error message appear Email or password don\'t match.", () => {
        cy.get('.MuiTypography-body1').should('include.text', 'Sorry, User not found');
    })
  })//End of TC_SI_004

//######################################################################################################################### */

//TC_SI_005
describe("TC_SI_005 Validate Sign-In error message when user providing registered Email account with wrong password details.", () => {

    it("User should be directed to the SIGN IN page", () => {
        cy.visit("http://localhost:3000/signin");
  
    })
    it("unsuccessfully submit account details", () => {
        cy.get('#email').type("usera@gmail.com")
        cy.get('#password').type("87654321");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click({force: true});
    })
    it("after submit account details error message appear Email or password don\'t match.", () => {
        cy.get('.MuiTypography-body1').should('include.text', 'Email or password don\'t match.');
    })
  })//End of TC_SI_005

//######################################################################################################################### */

//TC_SI_006
describe("TC_SI_006 Validate Sign-In error message when user providing unregistered Email account with existing password details.", () => {

    it("User should be directed to the SIGN IN page", () => {
        cy.visit("http://localhost:3000/signin");

    })
    it("unsuccessfully submit account details", () => {
        cy.get('#email').type("userp@gmail.com")
        cy.get('#password').type("12345678");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click({force: true});
    })
    it("after submit account details error message appear Email or password don\'t match.", () => {
        cy.get('.MuiTypography-body1').should('include.text', 'Sorry, User not found');
    })
})//End of TC_SI_006

//######################################################################################################################### */

//TC_SI_007
describe("TC_SI_007 Validate Sign-In error message when user providing only numbers in Email field and only letters in password field.", () => {

    it("User should be directed to the SIGN IN page", () => {
        cy.visit("http://localhost:3000/signin");

    })
    it("unsuccessfully submit account details", () => {
        cy.get('#email').type("777777777")
        cy.get('#password').type("aaaaaaaa");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click({force: true});
    })
    it("after submit account details error message appear Email or password don\'t match.", () => {
        cy.get('.MuiTypography-body1').should('include.text', 'Sorry, User not found');
    })
})//End of TC_SI_007

//######################################################################################################################### */

//TC_SI_008
describe("TC_SI_008 Validate Sign-In error message when user providing Half registered Email address and currect password.", () => {

    it("User should be directed to the SIGN IN page", () => {
        cy.visit("http://localhost:3000/signin");

    })
    it("unsuccessfully submit account details", () => {
        cy.get('#email').type("userb@")
        cy.get('#password').type("12345678");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click({force: true});
    })
    it("after submit account details error message appear Email or password don\'t match.", () => {
        cy.get('.MuiTypography-body1').should('include.text', 'Sorry, User not found');
    })
})//End of TC_SI_008

//#################################################################################################################################################
