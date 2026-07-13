import LoginPage from '../pages/loginPage'

const loginPage = new LoginPage()



describe('Real World App Test', () => {
  
  
  it('login com sucesso', () => {
    cy.visit('http://localhost:3000')
  })
})