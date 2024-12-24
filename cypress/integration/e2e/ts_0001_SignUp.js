/// <reference types="cypress" />

//Executes TS_0001 - Sign Up

//TC_SU_001


describe("TC_SU_001 Validate Sign-Up Page by visiting that Page", () => {
  it("Should be able to go that Sign Up Page", () => {
    cy.visit("http://localhost:3000/signup");
  })  
});

 //End of TC_SU_001

//######################################################################################################################### */

//TC_SU_002

describe("TC_SU_002 Validate Sign-Up an Account by not providing Name Field", () => {
  it("Should not be able to submit a successfull submission via Sign Up form", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get("#phone").type("0123456789");
    cy.get('[id="email"]').type("userb@gmail.com");
    cy.get('[id="password"]').type("12345678");
    cy.get(
      ".MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label"
    ).click();
  })  
}); //End of TC_SU_002

//######################################################################################################################### */

//TC_SU_003

describe("TC_SU_003 Validate Sign-Up an Account by not providing Email Field", () => {
  it("Should not be able to submit a successfull submission via Sign Up form", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get('[id="name"]').type("User Alpha");
    cy.get("#phone").type("0123456789");
    cy.get('[id="password"]').type("12345678");
    cy.get(
      ".MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label"
    ).click();
  })  
});
//End of TC_SU_003

//######################################################################################################################### */

//TC_SU_004
describe("TC_SU_004 Validate Sign Up error message when not providing password", () => {
  it("Should not be able to submit a successfull submission via Sign Up form", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get('[id="name"]').type("User Alpha");
    cy.get('[id="email"]').type("useralpha@gmail.com");
  });
});

//End of TC_SU_004

//TC_SU_005
describe("TC_SU_005 Validate Sign Up error message when providing Invalid Email address", () => {
  it("Should not be able to submit a successfull submission via Sign Up form", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get('[id="name"]').type("User Alpha");
    cy.get('[id="email"]').type("useralpha");
    cy.get('[id="password"]').type("12345678");
  });
}); //End of TC_SU_005

//######################################################################################################################### */


//Executes TS_0006 - Sign Up

//TC_SU_006

describe("TC_SU_006 Validate success form submission", () => {
  it("Should Sign Up the User", () => {
    cy.visit("http://localhost:3000/signup");

    // Fill out the form
    cy.get('#name').type("UserB");
    cy.get('#phone').type("0123456789");
    cy.get('#email').type("userA@gmail.com");
    cy.get('#password').type("12345678");

    // Ensure the Submit button is visible
    cy.contains('button', 'Submit').click({force: true});

    cy.contains('button', 'Sign In',{timeout:1000}).click({force: true});
    
  });
});

//End of TC_SU_006
