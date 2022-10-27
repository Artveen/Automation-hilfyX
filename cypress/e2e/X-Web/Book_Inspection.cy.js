/// <reference types="cypress"/>
it("Book inspection with billing adress",() => {
    cy.visit('https://web.stage.dopomo.com.ua/cabinet');
    cy.get('input.form-control').type('962261815');
    cy.get('button.btn.btn_green.btn_h54').click();
    cy.get('.form__container .form__item:nth-child(1) .form__input').type(1);
    cy.get('.form__container .form__item:nth-child(2) .form__input').type(8);
    cy.get('.form__container .form__item:nth-child(3) .form__input').type(1);
    cy.get('.form__container .form__item:nth-child(4) .form__input').type(5);
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
    cy.get('.cabinet-back__btn') .click();
    cy.get('[class="page page_bg-pink"] .menu__option:nth-child(1)') .click();
    //cy.get('.ant-picker-input') .click();//if all time slots are empty
    //cy.get('.ant-picker-header-next-btn') .click();//if all time slots are empty
    //cy.get('.ant-picker-body [title="2022-09-02"]') .click(); // if all time slots are empty
    cy.get('.btn_address') .click();
    cy.get('[class="form__input pac-target-input"]') .type('Düsseldorfer Straße 1, Frankfurt am Main, Deutschland')
    cy.get('body > div.pac-container.pac-logo.hdpi > div:nth-child(1) > span.pac-item-query > span:nth-child(1)') .click();
    cy.get('[name="apartment"]') .type('22');
    cy.get('.form-item .btn_green.btn_h54') .click();
    cy.get('.form_booking .btn_green.btn_h54') .click() .wait(5000);
    cy.get('.btn_bill') .click();
    cy.get('.ant-modal-confirm-btns .ant-btn-primary') .click();
    //cy.get('body > div:nth-child(16) > div > div.ant-modal-wrap > div > div.ant-modal-content > div > div > div.ant-modal-confirm-btns > button.ant-btn.ant-btn-primary') .click();
})