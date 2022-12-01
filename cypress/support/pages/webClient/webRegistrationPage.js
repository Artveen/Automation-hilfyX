class webRegistrationPage{
visit(){
     cy.visit('https://web.stage.dopomo.com.ua/cabinet')
}
getNameField(){
    return cy.get('[name="first_name"]')
}
getSurnameField(){
    return cy.get('[name="last_name"]')
}
getEmailField(){
    return cy.get('[name="email"]')
}
getSubmitButton(){
   return cy.get('[class="btn btn_green btn_h54"]') 
}
getOnbording(){
   return cy.get('#__next > div > div > div > div.onboard__checkboxes-wrapper > label:nth-child(1) > span.ant-checkbox > input')
}
getCompleteRegistrationButton(){
    return  cy.get('#__next > div > div > div > button')
}
getProfile(){
    return cy.get('[class="menu__center"] [class="font-bold foz-14"]')
}
getDeleteProfileButton(){
    return cy.get('[class="btn_delete"]') 
}
getSubmitDeleteButton(){
    return   cy.get('[class="ant-btn ant-btn-primary"]')
}
positiveRegistrationCase(name, surname, email){
    cy.log("Complete registration")
    this.getNameField().type(name);
    this.getSurnameField().type(surname);
    this.getEmailField().type(email);
    this.getSubmitButton().click();
    this.getOnbording().click();
    this.getCompleteRegistrationButton().click();
    this.getProfile().click();
    this.getDeleteProfileButton().click();
    this.getSubmitDeleteButton().click();
}
registrationWithLongCreds(longName, longSurname, longEmail){
    cy.log("Complete registration with long credentials")
    this.getNameField().type(longName);
    this.getSurnameField().type(longSurname);
    this.getEmailField().type(longEmail);
    this.getSubmitButton().click();
    this.getOnbording().click();
    this.getCompleteRegistrationButton().click();
    this.getProfile().click();
    this.getDeleteProfileButton().click();
    this.getSubmitDeleteButton().click();
}
} export default new webRegistrationPage



