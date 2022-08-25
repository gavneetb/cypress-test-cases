describe("Sign Up for Newsletter", () => {
  it('confirms there is no message box', () => {
    cy.visit('https://www.tribalscale.com/')

    cy.contains('Connect With Us').click({force: true})

    cy.url().should('include', '/connect')

    cy.contains("Sign Up for Newsletter").click()

    cy.contains('Message').should('not.exist')
  })
})