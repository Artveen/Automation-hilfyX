class clientSubscription{
visit(){
    cy.visit('https://web.stage.dopomo.com.ua/cabinet')
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
getClientSubscription(cardNumber, date, cvc){
    cy.log("Success user subscription")
    this.getSubscribeMenu().click();
    this.getSubscribeWindow().click();
    this.getStartSubscribe();
    this.getFillCardCredentials().find('[id="Field-numberInput"]').type(cardNumber);
    this.getFillCardCredentials().find('[id="Field-expiryInput"]').type(date);
    this.getFillCardCredentials().find('[id="Field-cvcInput"]').type(cvc);
    this.getSubmitSubscriptionButton().click();
}
}export default new clientSubscription