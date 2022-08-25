describe("Thought Leadership - Podcast Page", () => {
  it('gets and views podcasts', () => {
    cy.visit('https://www.tribalscale.com/')

    cy.get('#article-feed > .CustomLink__StyledLink-sc-1vnx8o-0 > .Button__UnderlinedButton-sc-v68trt-1').click()

    cy.url().should('include', '/thought-leadership/')

    cy.contains("More Podcasts").click()

  })
})