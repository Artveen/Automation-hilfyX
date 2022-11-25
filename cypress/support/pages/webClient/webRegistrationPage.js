class webRegistrationPage{
visit(){
     cy.visit('https://web.stage.dopomo.com.ua/cabinet')
}
getPhoneNumberField(){
    return cy.get('input.form-control')
}
getStartButton(){
    return cy.get('button.btn.btn_green.btn_h54')
}
getVerificationField1(){
    return cy.get('.form__container .form__item:nth-child(1) .form__input')
}
getVerificationField2(){
    return cy.get('.form__container .form__item:nth-child(2) .form__input')
}
getVerificationField3(){
    return cy.get('.form__container .form__item:nth-child(3) .form__input')
}
getVerificationField4(){
    return cy.get('.form__container .form__item:nth-child(4) .form__input')
}
getSubmitButton(){
    return cy.get('button.btn.btn_green.btn_h54')
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
positiveRegistrationCase(phoneNumber, code1, code2, code3, code4, name, surname, email){
    cy.log("Complete registration")
    this.getPhoneNumberField().type(phoneNumber);
    this.getStartButton().click();
    this.getVerificationField1().type(code1);
    this.getVerificationField2().type(code2);
    this.getVerificationField3().type(code3);
    this.getVerificationField4().type(code4);
    this.getSubmitButton().click();
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
registrationWithLongCreds(phoneNumber, code1, code2, code3, code4, longName, longSurname, longEmail){
    cy.log("Complete registration with long credentials")
    this.getPhoneNumberField().type(phoneNumber);
    this.getStartButton().click();
    this.getVerificationField1().type(code1);
    this.getVerificationField2().type(code2);
    this.getVerificationField3().type(code3);
    this.getVerificationField4().type(code4);
    this.getSubmitButton().click();
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



