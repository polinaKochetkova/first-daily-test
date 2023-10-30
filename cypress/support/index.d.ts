/// <reference types="Cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      createDefaultTodos(): Chainable<any>
      /**
       * Creates one Todo using UI
       * @example
       * cy.createTodo('new item')
       */
      assertPageUrl(url: string): Chainable<any>
    }
  }