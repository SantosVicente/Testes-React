/// <reference types="Cypress"/>

describe('API - Teste funcional de Login', () => {
  it('Deve realizar o login com sucesso', () => {
    cy.request('https://jsonplaceholder.typicode.com/todos/1')
      .its('body') // Acessa o corpo da resposta
      .then((json) => {
        cy.wrap(json).should('deep.equal', {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false,
        });
      });
  });
});
