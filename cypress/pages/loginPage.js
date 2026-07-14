class LoginPage {
  selectorsList(){

    const selectors = {

        userNameField:'[name="username"]',
        passwordField:'[name="password"]',
        loginButton:'[data-test="signin-submit"]',
        boxRemember:'[name="remember"]',
        TextSignUp:'[data-test="signup"]',
      
    }
         return selectors
  }

     accessLoginPage(){
      cy.visit('/signin')

  }
     loginWithUser(username, password){
      cy.get(this.selectorsList().userNameField).type(username)
      cy.get(this.selectorsList().passwordField).type(password)
      cy.get(this.selectorsList().loginButton).click()

    }

}

export default LoginPage