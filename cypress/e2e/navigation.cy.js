/* global describe, it, beforeEach, cy */

describe('Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to Home page', () => {
    cy.get('[data-cy=nav-home]').click();
    cy.url().should('include', '/home');
  });

  it('should navigate to Sets page', () => {
    cy.get('[data-cy=nav-sets]').click();
    cy.url().should('include', '/sets');
  });

  it('should navigate to Create Set page', () => {
    cy.get('[data-cy=nav-create]').click();
    cy.url().should('include', '/sets/create');
  });
});