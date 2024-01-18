/// <reference types="cypress" />

describe('template spec', () => {
  it('Realizar login com sucesso', () => {
    cy.visit('https://www.saucedemo.com/v1/');

    //crie um script de teste que irá buscar o campo #user-name e digitar o texto "standard_user"
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('.product_label').should('contain', 'Products');
  });

  it('Validação credencial incorreta', () => {
    cy.visit('https://www.saucedemo.com/v1/');

    //crie um script de teste que irá buscar o campo #user-name e digitar o texto "standard_user"
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('.product_label').should('contain', 'Products');
  });

  it('Validação de senha incorreta', () => {
    cy.visit('https://www.saucedemo.com/v1/');

    //crie um script de teste que irá buscar o campo #user-name e digitar o texto "standard_user"
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('.product_label').should('contain', 'Products');
  });
});
