/// <reference types="cypress"/>
import 'cypress-iframe'

    it("Delete",()=>{
    cy.visit('https://web.stage.dopomo.com.ua/cabinet');
    cy.get('input.form-control').type('962261815');
    cy.get('button.btn.btn_green.btn_h54').click();
    cy.get('.form__container .form__item:nth-child(1) .form__input').type(1);
    cy.get('.form__container .form__item:nth-child(2) .form__input').type(8);
    cy.get('.form__container .form__item:nth-child(3) .form__input').type(1);
    cy.get('.form__container .form__item:nth-child(4) .form__input').type(5);
    cy.get('button.btn.btn_green.btn_h54').click();
    cy.get('[class="menu__center"] [class="font-bold foz-14"]') .click();
    cy.get('[class="btn_delete"]') .click();
    cy.get('.btn.btn_stripe') .click();
    cy.frameLoaded('iframe[title="Secure payment input frame"]');
    cy.iframe('iframe[title="Secure payment input frame"]').find('[id="Field-numberInput"]').type('4242424242424242');
    cy.iframe('iframe[title="Secure payment input frame"]').find('[id="Field-expiryInput"]').type('234');
    cy.iframe('iframe[title="Secure payment input frame"]').find('[id="Field-cvcInput"]').type('232');
    cy.get('[id="submit"]').click();
    })