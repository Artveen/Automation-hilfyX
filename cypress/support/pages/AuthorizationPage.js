class AuthorizationPage{
    visit(){
        cy.visit('https://admin.stage.dopomo.com.ua/auth/login');
    }

getLoginField(){
    return cy.get('[id="email"]')
}

getPasswordField(){
    return cy.get('[name="password"]')
}

getSubmitButton(){
    return cy.get('button[class="button button_medium"]')
}

submitLoginForm(email, password){
    cy.log("Fill and submit login form")
    
    this.getLoginField().type(email);
    this.getPasswordField().type(password);
    this.getSubmitButton().click();
}

submitLoginFormNegativEmail(Email, Password){
    cy.log("Fill form with negative email")
    this.getLoginField().type(Email)
    this.getPasswordField().type(Password);
    this.getSubmitButton().click();
}

submitLoginFormNegativBigEmail(email1, Password){
    cy.log("Fill form with 300 symbols in email")
    this.getLoginField().type(email1)
    this.getPasswordField().type(Password);
    this.getSubmitButton().click();
}

submitLoginFormUncorectPassword(email, password1){
    cy.log("Login with uncorrect password")
    this.getLoginField().type(email)
    this.getPasswordField().type(password1);
    this.getSubmitButton().click();
}

} export default new AuthorizationPage();


