/// <reference types="cypress"/>
it("Auth Web-cabinet",() => {
    cy.visit('https://web.stage.dopomo.com.ua/cabinet');
    cy.get('input.form-control').type('631111111');
    cy.get('button.btn.btn_green.btn_h54').click();
    cy.get('.form__container .form__item:nth-child(1) .form__input').type(1);
    cy.get('.form__container .form__item:nth-child(2) .form__input').type(1);
    cy.get('.form__container .form__item:nth-child(3) .form__input').type(1);
    cy.get('.form__container .form__item:nth-child(4) .form__input').type(1);
    // .form__container .form__item:nth-child(1) .form__input how to find first input
    cy.get('button.btn.btn_green.btn_h54').click();

})