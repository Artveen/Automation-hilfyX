class clientSubscription{
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
getSubscribeMenu(){
    return cy.get('.menu__button_subscription')
}
getSubscribeWindow(){
    return cy.get('.subscription__button_main')
}
getStartSubscribe(){
    return cy.frameLoaded('iframe[title="Secure payment input frame"]')
}
getFillCardCredentials(){
    return cy.iframe('iframe[title="Secure payment input frame"]')
}
getSubmitSubscriptionButton(){
    return cy.get('[id="submit"]')
}
getClientSubscription(phoneNumber, code1, code2, code3, code4, cardNumber, date, cvc){
    cy.log("Success user subscription")
    this.getPhoneNumberField().type(phoneNumber);
    this.getStartButton().click();
    this.getVerificationField1().type(code1);
    this.getVerificationField2().type(code2);
    this.getVerificationField3().type(code3);
    this.getVerificationField4().type(code4);
    this.getSubmitButton().click();
    this.getSubscribeMenu().click();
    this.getSubscribeWindow().click();
    this.getStartSubscribe();
    this.getFillCardCredentials().find('[id="Field-numberInput"]').type(cardNumber);
    this.getFillCardCredentials().find('[id="Field-expiryInput"]').type(date);
    this.getFillCardCredentials().find('[id="Field-cvcInput"]').type(cvc);
    this.getSubmitSubscriptionButton().click();
}
}export default new clientSubscription