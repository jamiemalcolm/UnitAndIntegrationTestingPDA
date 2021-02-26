// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the running total as number buttons are pressed', () => {
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('.display').should('contain', '111')
  })

  it('should update the running total with the result of an operation', () => {
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 15)
  })

  it('can multiple operations be chained together', () => {
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#number5').click();
    cy.get('#operator_subtract').click();
    cy.get('#number8').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 24)
  })

  it('should work as expected with positive numbers', () => {
    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 8);
  })

  it('should work as expected to display negative numbers', () => {
    cy.get('#number2').click();
    cy.get('#operator_subtract').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', -1);
  })

  it('should be able to display decimal numbers', () => {
    cy.get('#number7').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 3.5);
  })

  it('should be able to work with very large numbers', () => {
    cy.get('#number2').click();
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#operator_multiply').click();
    cy.get('#number3').click();
    cy.get('#number2').click();
    cy.get('#number1').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 6821199);
  })

  it('should provide error message if divide by zero', () => {
    cy.get('#number7').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', "error, divide by zero");
  })
})
