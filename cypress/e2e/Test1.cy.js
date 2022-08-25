describe("Let's Work Together Form", () => {
  it('checks for message box', () => {
    cy.visit('https://www.tribalscale.com/')

    cy.contains('Connect With Us').click({force: true})

    cy.url().should('include', '/connect')

    cy.contains("Let's Work Together").click()

    cy.contains('Message')
  })
})