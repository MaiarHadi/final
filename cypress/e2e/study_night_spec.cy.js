/* global describe, it,beforeEach,cy */

describe('Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
  });

  it('Navigates to Card Set page', () => {
    cy.get('[data-cy=card-set-link]').click();
    cy.url().should('include', '/card-sets');
  });

  it('Navigates to About page', () => {
    cy.get('[data-cy=about-link]').click();
    cy.url().should('include', '/about');
  });

  it('Navigates to Home page', () => {
    cy.get('[data-cy=home-link]').click();
    cy.url().should('include', '/');
  });
});