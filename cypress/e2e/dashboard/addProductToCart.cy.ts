/// <reference types="cypress" />

describe('template spec', () => {
  beforeEach(() => {
    cy.test_login('standard_user', 'secret_sauce');
  });
  it('passes', () => {
    cy.url().should('include', '/inventory');
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click();
    cy.get('.shopping_cart_badge').should('contain', '1');
    cy.get('.shopping_cart_link').click();
    cy.get('.cart_quantity').should('contain', '1');
  });
});
