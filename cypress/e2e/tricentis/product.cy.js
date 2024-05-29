describe('Verify Register Functionality', () => {
  beforeEach(() => {
    cy.visit('')
    cy.title().should('include', 'Demo Web Shop')
  }) 
  afterEach(() => {
    cy.title().should('include', 'Demo Web Shop')
  }) 
  it('Search product 1',() => {
    cy.get('#small-searchterms').type(Cypress.env('product1'))
    cy.get('form > .button-1').click()
    cy.url().should('include',Cypress.env('product1'))
    
  })
  it('Search product 2',() => {
    cy.get('#small-searchterms').type(Cypress.env('product2'))
    cy.get('form > .button-1').click()
    cy.url().should('include',Cypress.env('product2'))
    
  })
})


