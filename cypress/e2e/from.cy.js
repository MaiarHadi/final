/* global describe, it, beforeEach, cy */

describe('Create Set Form Tests', () => {
  beforeEach(() => {
    cy.visit('/sets/create');
  });

  it('should show error when form is submitted empty', () => {
    cy.get('[data-cy=create-set-submit]').click();
    cy.contains('Title is required').should('be.visible');
  });

  it('should submit the form with valid data', () => {
    cy.get('[data-cy=create-set-title]').type('Test Set');
    cy.get('[data-cy=create-set-submit]').click();
    cy.contains('Set created successfully').should('be.visible'); 
  });
});