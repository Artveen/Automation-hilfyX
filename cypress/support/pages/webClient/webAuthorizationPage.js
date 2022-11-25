class webAuthorizationPage{
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


submitLoginForm(phoneNumber, code1, code2, code3, code4){
cy.log("Fill authorization form")
this.getPhoneNumberField().type(phoneNumber);
this.getStartButton().click();
this.getVerificationField1().type(code1);
this.getVerificationField2().type(code2);
this.getVerificationField3().type(code3);
this.getVerificationField4().type(code4);
this.getSubmitButton().click()
}
submitLoginFormWithWrongCode(phoneNumber, incorrectCode1, incorrectCode2, incorrectCode3, incorrectCode4){
cy.log("Fill authorization form with wrong sms code")
this.getPhoneNumberField().type(phoneNumber);
this.getStartButton().click();
this.getVerificationField1().type(incorrectCode1);
this.getVerificationField2().type(incorrectCode2);
this.getVerificationField3().type(incorrectCode3);
this.getVerificationField4().type(incorrectCode4);
this.getSubmitButton().click()  
}
}export default new webAuthorizationPage();