/// <reference types="cypress"/>
it("Add billing adress from profile",() => {
    cy.visit('https://web.stage.dopomo.com.ua/cabinet');
    cy.get('input.form-control').type('962261815');
    cy.get('button.btn.btn_green.btn_h54').click();
    cy.get('.form__container .form__item:nth-child(1) .form__input').type(1);
    cy.get('.form__container .form__item:nth-child(2) .form__input').type(8);
    cy.get('.form__container .form__item:nth-child(3) .form__input').type(1);
    cy.get('.form__container .form__item:nth-child(4) .form__input').type(5);
    // .form__container .form__item:nth-child(1) .form__input how to find first input
    cy.get('button.btn.btn_green.btn_h54').click();
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
    
})