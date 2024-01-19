/// <reference types="cypress" />

describe('template spec', () => {
  it('Realizar login com sucesso', () => {
    cy.test_login('standard_user', 'secret_sauce');
    cy.get('.product_label').should('contain', 'Products');
  });

  it('Validação de credenciais incorreta', () => {
    cy.test_login('standard_user1', 'secret_sauce');
    cy.get('[data-test="error"]').should(
      'contain',
      'Epic sadface: Username and password do not match any user in this service'
    );

    cy.test_login('standard_user', 'secret_sauce1');
    cy.get('[data-test="error"]').should(
      'contain',
      'Epic sadface: Username and password do not match any user in this service'
    );
  });
});
