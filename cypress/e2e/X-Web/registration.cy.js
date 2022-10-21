/// <reference types="cypress"/>
it("Registration and Delete account Web-cabinet",() => {
    cy.visit('https://web.stage.dopomo.com.ua/cabinet');
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

    // cy.get('[class="menu__center"] [class="font-bold foz-14"]') .click();
    // cy.get('[class="btn_delete"]') .click();
    // cy.get('[class="ant-btn ant-btn-primary"]') .click();
    
})