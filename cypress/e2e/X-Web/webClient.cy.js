/// <reference types="cypress"/>
import 'cypress-iframe'

 let token;
// beforeEach(() => {
//     cy.setCookie
//     cy.visit('https://web.stage.dopomo.com.ua/')
           
// })

describe('Test suit for HilfyX Web Client', () => {
describe ('Positive scenarios', () =>{
it.skip("Registration", () => {
    cy.visit('https://web.stage.dopomo.com.ua/')
    cy.get('input.form-control').type('962261815');
    cy.get('button.btn.btn_green.btn_h54').click();
    cy.get('.form__container .form__item:nth-child(1) .form__input').type(1);
    cy.get('.form__container .form__item:nth-child(2) .form__input').type(8);
    cy.get('.form__container .form__item:nth-child(3) .form__input').type(1);
    cy.get('.form__container .form__item:nth-child(4) .form__input').type(5);
    cy.get('button.btn.btn_green.btn_h54').click();
    cy.get('[name="first_name"]') .type('Artem');
    cy.get('[name="last_name"]') .type('Ivankov');
    cy.get('[name="email"]') .type('ia.hilfy+19@gmail.com');
    cy.get('[class="btn btn_green btn_h54"]') .click();
    cy.get('#__next > div > div > div > div.onboard__checkboxes-wrapper > label:nth-child(1) > span.ant-checkbox > input') .click();
    cy.get('#__next > div > div > div > button') .click();
    })
              

it("Login", () => {
    
    cy.visit('https://web.stage.dopomo.com.ua/')
    cy.get('input.form-control').type('962261815');
    cy.get('button.btn.btn_green.btn_h54').click();
    cy.get('.form__container .form__item:nth-child(1) .form__input').type(1);
    cy.get('.form__container .form__item:nth-child(2) .form__input').type(8);
    cy.get('.form__container .form__item:nth-child(3) .form__input').type(1);
    cy.get('.form__container .form__item:nth-child(4) .form__input').type(5);
    cy.get('button.btn.btn_green.btn_h54').click();
    cy.get('[class="page page_bg-pink"] .menu__option:nth-child(2)').should('be.visible') .then(()=>{
        cy.getCookie('access_token') .then(cookie =>{
            token = cookie.value
            })   
    })
     });

 it("Add biling address", () =>{
    cy.setCookie('access_token', token);
    cy.visit('https://web.stage.dopomo.com.ua/');
    // cy.get('input.form-control').type('962261815');
    // cy.get('button.btn.btn_green.btn_h54').click();
    // cy.get('.form__container .form__item:nth-child(1) .form__input').type(1);
    // cy.get('.form__container .form__item:nth-child(2) .form__input').type(8);
    // cy.get('.form__container .form__item:nth-child(3) .form__input').type(1);
    // cy.get('.form__container .form__item:nth-child(4) .form__input').type(5);
    // .form__container .form__item:nth-child(1) .form__input how to find first input
    //cy.get('button.btn.btn_green.btn_h54').click();
    cy.get('[class="menu__center"] [class="font-bold foz-14"]') .click();
    cy.get('.billing-address') .click(); 
    cy.get('.ant-select-selection-item') .click() .first() .click();
    cy.get('.form__item.mb-16 [name="first_name"]') .type('John');
    cy.get('.form__item.mb-16 [name="last_name"]') .type('Doe');
    cy.get('.form__item.mb-16 [name="street"]') .type('Akhamatovoi str.');
    cy.get('.form__item.mb-16 [name="house"]') .type(22);
    cy.get('.form__item.mb-16 [name="country"]') .type('Ukraine');
    cy.get('.form__item.mb-16 [name="city"]') .type('Kyiv');
    cy.get('.form__item.mb-16 [name="postcode"]') .type('02001');
    cy.get('.form-item .btn.btn_green.btn_h54') .click();
    });

    it("Add subscription",() => {
    cy.visit('https://web.stage.dopomo.com.ua/')
    cy.setCookie('access_token', token);
    // cy.get('input.form-control').type('631111111');
    // cy.get('button.btn.btn_green.btn_h54').click();
    // cy.get('.form__container .form__item:nth-child(1) .form__input', {timeout: 20000}).type(1);
    // cy.get('.form__container .form__item:nth-child(2) .form__input', {timeout: 20000}).type(1);
    // cy.get('.form__container .form__item:nth-child(3) .form__input', {timeout: 20000}).type(1);
    // cy.get('.form__container .form__item:nth-child(4) .form__input', {timeout: 20000}).type(1);
    // cy.get('button.btn.btn_green.btn_h54', {timeout: 20000}).click();
    cy.get('.menu__button_subscription', {timeout: 20000}) .click();
    cy.get('.subscription__button_main', {timeout: 20000}) .click();
    })
        
it("Book remote assist", () => {
    cy.setCookie('access_token', token);
    cy.visit('https://web.stage.dopomo.com.ua/')
    // cy.get('input.form-control',{timeout: 52000}).type('962261815');
    // cy.get('button.btn.btn_green.btn_h54').click();
    // cy.get('.form__container .form__item:nth-child(1) .form__input').type(1);
    // cy.get('.form__container .form__item:nth-child(2) .form__input').type(8);
    // cy.get('.form__container .form__item:nth-child(3) .form__input').type(1);
    // cy.get('.form__container .form__item:nth-child(4) .form__input').type(5);
    //cy.get('button.btn.btn_green.btn_h54').click();
    cy.get('[class="page page_bg-pink"] .menu__option:nth-child(2)') .click();
    cy.get('.time-slot_active') .click();
    cy.get('[class="btn btn_green btn_h54"]') .click();
       });

it("Book remote assist with subscribe", () =>{
    cy.setCookie('access_token', token);
    cy.visit('https://web.stage.dopomo.com.ua/')
    // cy.get('input.form-control', {timeout: 52000}).type('962261815');
    // cy.get('button.btn.btn_green.btn_h54', {timeout: 5000}).click();
    // cy.get('.form__container .form__item:nth-child(1) .form__input', {timeout: 5000}).type(1);
    // cy.get('.form__container .form__item:nth-child(2) .form__input', {timeout: 5000}).type(8);
    // cy.get('.form__container .form__item:nth-child(3) .form__input', {timeout: 5000}).type(1);
    // cy.get('.form__container .form__item:nth-child(4) .form__input', {timeout: 5000}).type(5);
    //cy.get('button.btn.btn_green.btn_h54', {timeout: 5000}).click();
    cy.get('.menu__button_subscription', {timeout: 5000}) .click();
    cy.get('.subscription__button_main', {timeout: 5000}) .click();
    cy.frameLoaded('iframe[title="Secure payment input frame"]');
    cy.iframe('iframe[title="Secure payment input frame"]').find('[id="Field-numberInput"]').type('4242424242424242');
    cy.iframe('iframe[title="Secure payment input frame"]').find('[id="Field-expiryInput"]').type('234');
    cy.iframe('iframe[title="Secure payment input frame"]').find('[id="Field-cvcInput"]').type('232');
    cy.get('[id="submit"]').click();
    cy.wait(10000);
    cy.get('.cabinet-back__btn') .click();
    //cy.get('button.btn.btn_green.btn_h54').click();
    cy.get('[class="page page_bg-pink"] .menu__option:nth-child(2)') .click();
    cy.get('.time-slot_active') .click();
    cy.get('[class="btn btn_green btn_h54"]') .click();
       })

it("Book inspection", () =>{
    cy.setCookie('access_token', token);
    cy.visit('https://web.stage.dopomo.com.ua/')
    // cy.get('input.form-control').type('962261815');
    // cy.get('button.btn.btn_green.btn_h54').click();
    // cy.get('.form__container .form__item:nth-child(1) .form__input').type(1);
    // cy.get('.form__container .form__item:nth-child(2) .form__input').type(8);
    // cy.get('.form__container .form__item:nth-child(3) .form__input').type(1);
    // cy.get('.form__container .form__item:nth-child(4) .form__input').type(5);
    // cy.get('button.btn.btn_green.btn_h54').click();
    cy.get('[class="menu__center"] [class="font-bold foz-14"]') .click();
    cy.get('.billing-address') .click(); 
    cy.get('.ant-select-selection-item') .click() .first() .click();
    cy.get('.form__item.mb-16 [name="first_name"]') .type('John');
    cy.get('.form__item.mb-16 [name="last_name"]') .type('Doe');
    cy.get('.form__item.mb-16 [name="street"]') .type('Akhamatovoi str.');
    cy.get('.form__item.mb-16 [name="house"]') .type(22);
    cy.get('.form__item.mb-16 [name="country"]') .type('Ukraine');
    cy.get('.form__item.mb-16 [name="city"]') .type('Kyiv');
    cy.get('.form__item.mb-16 [name="postcode"]') .type('02001');
    cy.get('.form-item .btn.btn_green.btn_h54') .click();
    cy.get('.cabinet-back__btn') .click();
    cy.get('[class="page page_bg-pink"] .menu__option:nth-child(1)') .click();
    //cy.get('.ant-picker-input') .click();//if all time slots are empty
    //cy.get('.ant-picker-header-next-btn') .click();//if all time slots are empty
    //cy.get('.ant-picker-body [title="2022-09-02"]') .click(); // if all time slots are empty
    cy.get('.btn_address') .click();
    cy.get('[class="form__input pac-target-input"]') .type('Düsseldorfer Straße 3, Frankfurt am Main, Deutschland')
    cy.get('body > div.pac-container.pac-logo.hdpi > div:nth-child(1) > span.pac-item-query > span:nth-child(1)') .click();
    cy.get('[name="apartment"]') .type('22');
    cy.get('.form-item .btn_green.btn_h54') .click();
    cy.get('.form_booking .btn_green.btn_h54') .click() .wait(5000);
    cy.get('.btn_bill') .click();
    cy.get('.ant-modal-confirm-btns .ant-btn-primary') .click();
    })
}) 
})
after(('Delete account', () => {
    cy.visit('https://web.stage.dopomo.com.ua/')
    // cy.get('input.form-control').type('962261815');
    // cy.get('button.btn.btn_green.btn_h54').click();
    // cy.get('.form__container .form__item:nth-child(1) .form__input').type(1);
    // cy.get('.form__container .form__item:nth-child(2) .form__input').type(8);
    // cy.get('.form__container .form__item:nth-child(3) .form__input').type(1);
    // cy.get('.form__container .form__item:nth-child(4) .form__input').type(5);
    // cy.get('button.btn.btn_green.btn_h54').click();
    cy.get('[class="menu__center"] [class="font-bold foz-14"]') .click();
    cy.get('[class="btn_delete"]') .click();
    cy.get('[class="ant-btn ant-btn-primary"]') .click();
            })) 
        
       