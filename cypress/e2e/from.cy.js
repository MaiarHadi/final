/* global describe, it, beforeEach, cy */

describe('Form Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
  });

  it('Submits Create Set form successfully (happy path)', () => {
    cy.get('[data-cy=create-set-input]').type('My New Set');
    cy.get('[data-cy=create-set-submit]').click();
    cy.contains('Set created successfully').should('exist');
  });

  it('Shows error when Create Set form is empty (unhappy path)', () => {
    cy.get('[data-cy=create-set-submit]').click();
    cy.contains('Please enter a set name').should('exist');
  });

  it('Submits Add Card form successfully (happy path)', () => {
    cy.get('[data-cy=card-question-input]').type('What is AI?');
    cy.get('[data-cy=card-answer-input]').type('Artificial Intelligence');
    cy.get('[data-cy=add-card-submit]').click();
    cy.contains('Card added successfully').should('exist');
  });

  it('Shows error when Add Card form fields are empty (unhappy path)', () => {
    cy.get('[data-cy=add-card-submit]').click();
    cy.contains('Please fill in all fields').should('exist');
  });
});