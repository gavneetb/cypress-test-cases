describe("Case Studies Page", () => {
  it('checks for decription', () => {
    cy.visit('https://www.tribalscale.com/')

    cy.get('#case-study-label > .Button__UnderlinedButton-sc-v68trt-1').click()

    cy.url().should('include', '/clients/')

    cy.contains("Our work spans industries, platforms, and continents.").should("exist")

  })
})