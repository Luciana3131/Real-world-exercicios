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
    


 }


}

export default LoginPage