/// <reference types="Cypress" />
import homepage from "../../pageobject/homepage";


describe("empty spec", () => {
  const homePage = new homepage();
  beforeEach(function(){
   
    cy.visit("https://www.blazedemo.com/")

  });
    it("verify blazedemo homepage", () => {
      homePage.homePageTitle().should('have.text','Welcome to the Simple Travel Agency!')
    })
  })