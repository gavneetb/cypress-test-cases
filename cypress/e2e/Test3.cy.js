describe("Accessing TribalScale user profiles", () => {
  it('views the forms', () => {
    cy.visit('https://www.tribalscale.com/')

    cy.get('button#nav-hamburger-open').click()

    cy.get('div#company-dropdown').click()

    cy.get('a#about-modal-link').click()

    cy.url().should('include', '/about/')

    cy.contains("Nicola Watson").click()

   cy.url().should('include', '/about/profile/Nicola%20Watson')
  })
})