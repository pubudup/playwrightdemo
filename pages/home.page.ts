export class HomePage{
    
    constructor(public page:object){
        this.page = page;
    }
   
    static selectors = {
        pageURL: '',
        usernameTextBox: 'input[data-test="username"]',
        passwordTextBox: 'input[data-test="password"]',
        loginButton: 'input[data-test="login-button"]'
    
       
    

    };


}