describe('Verify Register Functionality', () => {
  beforeEach(() => {
    cy.visit('/register')
  }) 
  it('Failed Regist - Email Invalid',() => {
    cy.get('#gender-male').check()
    cy.ketik('#FirstName','putra')
    cy.ketik('#LastName','saragih')
    cy.ketik('#Email','putr')
    cy.get('#register-button').click()
    cy.get(':nth-child(4) > .field-validation-error > span').should('contain.text','Wrong email')
    cy.get(':nth-child(1) > .field-validation-error > span').should('contain.text','Password is required.')
  })

it('Failed Regist - Unmatch Pass',() => {
  cy.get('#gender-male').check()
  cy.ketik('#FirstName','putra')
  cy.ketik('#LastName','saragih')
  cy.ketik('#Email','putra@gmail.com')
  cy.ketik('#Password','123456789')
  cy.ketik('#ConfirmPassword','987654321')
  cy.get('#register-button').click()
  cy.get('.field-validation-error > span').should('contain.text','The password and confirmation password do not match.')
})
it('Failed Regist - Min Pass Char',() => {
  cy.get('#gender-male').check()
  cy.ketik('#FirstName','putra')
  cy.ketik('#LastName','saragih')
  cy.ketik('#Email','putra@gmail.com')
  cy.ketik('#Password','123')
  cy.ketik('#ConfirmPassword','123')
  cy.get('#register-button').click()
  cy.get(':nth-child(1) > .field-validation-error > span').should('contain.text','The password should have at least 6 characters.')
})
})

