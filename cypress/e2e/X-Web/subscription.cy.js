/// <reference types="cypress"/>
import 'cypress-iframe'

let token;

// beforeEach(() => {
//     cy.visit('https://web.stage.dopomo.com.ua/')
//     cy.get('input.form-control').type('631111111');
//             cy.get('button.btn.btn_green.btn_h54').click();
           
// })

// before('Login request', () => {
//     cy.request('POST', 'https://web.stage.dopomo.com.ua/app/login').then(response => {
//       token = response.token;
//     })
//     console.log(token)
//     })
  

it("Add subscription",() => {
    cy.visit('https://web.stage.dopomo.com.ua/')
    cy.get('input.form-control').type('631111111');
    cy.get('button.btn.btn_green.btn_h54').click();
    cy.get('.form__container .form__item:nth-child(1) .form__input', {timeout: 20000}).type(1);
    cy.get('.form__container .form__item:nth-child(2) .form__input', {timeout: 20000}).type(1);
    cy.get('.form__container .form__item:nth-child(3) .form__input', {timeout: 20000}).type(1);
    cy.get('.form__container .form__item:nth-child(4) .form__input', {timeout: 20000}).type(1);
    cy.get('button.btn.btn_green.btn_h54', {timeout: 20000}).click();
    cy.get('.menu__button_subscription', {timeout: 20000}) .click();
    cy.get('.subscription__button_main', {timeout: 20000}) .click();
    cy.getCookie('access_token') .then(cookie =>{
    token = cookie.value
    })
    //cy.wait(10000);
    // cy.frameLoaded('iframe[title="Secure payment input frame"]');
    // cy.iframe('iframe[title="Secure payment input frame"]').find('[id="Field-numberInput"]').type('4242424242424242');
    // cy.iframe('iframe[title="Secure payment input frame"]').find('[id="Field-expiryInput"]').type('234');
    // cy.iframe('iframe[title="Secure payment input frame"]').find('[id="Field-cvcInput"]').type('232');
    // cy.get('[id="submit"]').click();
})
it("Add subscription",() => {
    cy.log(token)
})