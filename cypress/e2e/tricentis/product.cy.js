describe('Verify Register Functionality', () => {
  beforeEach(() => {
    cy.visit('https://demowebshop.tricentis.com')
  }) 
  it('Failed Regist - Min Pass Char',() => {
    cy.title().should('include', 'Demo Web Shop')
    const product = 'computer'
    cy.get('#small-searchterms').type(product)
    cy.get('form > .button-1').click()
    cy.url().should('include',product)
    cy.title().should('include', 'Demo Web Shop. Search')
  })
})


