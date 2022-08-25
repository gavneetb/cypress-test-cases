describe("TribalScale Values", () => {
  it('checks for values', () => {
    cy.visit('https://www.tribalscale.com/')

    cy.get('button#nav-hamburger-open').click()

    cy.get('div#company-dropdown').click()

    cy.get('a#careers-modal-link').click()

    cy.url().should('include', '/careers/')

    cy.contains("Resilience").should("exist")
    cy.contains("Empowerment").should("exist")
    cy.contains("Challenge & Collaborate").should("exist")
    cy.contains("Caring").should("exist")
  })
})