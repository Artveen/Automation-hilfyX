/// <reference types="cypress"/>

beforeEach(() => {
    cy.visit('https://web.stage.dopomo.com.ua/');
})

describe('Test suit for HilfyX Web Client', () => {
    describe ('Positive scenarios', () =>{
        it("Login", () => {
            cy.get('input.form-control').type('631111111');
    cy.get('button.btn.btn_green.btn_h54').click();
    cy.get('.form__container .form__item:nth-child(1) .form__input').type(1);
    cy.get('.form__container .form__item:nth-child(2) .form__input').type(1);
    cy.get('.form__container .form__item:nth-child(3) .form__input').type(1);
    cy.get('.form__container .form__item:nth-child(4) .form__input').type(1);
    cy.get('button.btn.btn_green.btn_h54').click();
        })

        it("Registration", () => {
            cy.get('input.form-control').type('962261815');
            cy.get('button.btn.btn_green.btn_h54').click();
            cy.get('.form__container .form__item:nth-child(1) .form__input').type(1);
            cy.get('.form__container .form__item:nth-child(2) .form__input').type(8);
            cy.get('.form__container .form__item:nth-child(3) .form__input').type(1);
            cy.get('.form__container .form__item:nth-child(4) .form__input').type(5);
        })
    })
})