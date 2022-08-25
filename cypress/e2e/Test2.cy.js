describe("Let's Work Together", () => {
  it('submits the form', () => {
    cy.visit('https://www.tribalscale.com/')

    cy.contains('Connect With Us').click({force: true})

    cy.url().should('include', '/connect')

    cy.contains("Let's Work Together").click()

    cy.get("input[type='text']")
      .type('Automation Test')
      .should('have.value', 'Automation Test')


    cy.get("input[type='email']")
      .type('gbhandal@tribalscale.com')
      .should('have.value', 'gbhandal@tribalscale.com')

    cy.get("button[type='submit']").click()

    cy.url().should('include', '/connect-success')

    cy.contains('Thanks')

  })
})