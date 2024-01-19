/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    test_login(email: string, password: string): Chainable<void>;
  }
}

Cypress.Commands.add('test_login', (email: string, password: string) => {
  cy.visit('https://www.saucedemo.com/v1/');
  cy.get('[data-test="username"]').clear();
  cy.get('[data-test="password"]').clear();
  cy.get('[data-test="username"]').type(email);
  cy.get('[data-test="password"]').type(password);
  cy.get('#login-button').click();
});
