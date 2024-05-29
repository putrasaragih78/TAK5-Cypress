describe('Verify Register Functionality', () => {
  beforeEach(() => {
    cy.visit('/register')
  }) 
  it('Failed Regist - Min Pass Char',() => {
    cy.get('#gender-male').check()
    cy.get('#FirstName').type('putra')
    cy.get('#LastName').type('saragih')
    cy.get('#Email').type('putra@gmail.com')
    cy.get('#Password').type('123')
    cy.get('#ConfirmPassword').type('123')
    cy.get('#register-button').click()
    cy.get(':nth-child(1) > .field-validation-error > span').should('contain.text','The password should have at least 6 characters.')
  })
  it('Failed Regist - Unmatch Pass',() => {
    cy.get('#gender-male').check()
    cy.get('#FirstName').type('putra')
    cy.get('#LastName').type('saragih')
    cy.get('#Email').type('putra@gmail.com')
    cy.get('#Password').type('123456789')
    cy.get('#ConfirmPassword').type('987654321')
    cy.get('#register-button').click()
    cy.get('.field-validation-error > span').should('contain.text','The password and confirmation password do not match.')
  })
  it('Failed Regist - Email Invalid',() => {
    cy.get('#gender-male').check()
    cy.get('#FirstName').type('putra')
    cy.get('#LastName').type('saragih')
    cy.get('#Email').type('putr')
    cy.get('#register-button').click()
    cy.get(':nth-child(4) > .field-validation-error > span').should('contain.text','Wrong email')
    cy.get(':nth-child(1) > .field-validation-error > span').should('contain.text','Password is required.')
  })
})


