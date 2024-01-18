/// <reference types="cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click();
  });
});
