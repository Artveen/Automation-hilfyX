import 'cypress-iframe'
class webDeletePage{
    visit(){
        cy.visit('https://web.stage.dopomo.com.ua/cabinet')
    }
    getProfile(){
        return cy.get('[class="menu__center"] [class="font-bold foz-14"]');
    }
    getDeleteProfileButton(){
        return cy.get('[class="btn_delete"]');
    }
    getSubmitDeleteButton(){
        return   cy.get('[class="ant-btn ant-btn-primary"]');
    }
    getStripeButton(){
        return cy.get('.btn.btn_stripe');
    }
    getPaymentWindow(){
        return cy.frameLoaded('iframe[title="Secure payment input frame"]');
    }
    getStripeWindow(){
        return cy.iframe('iframe[title="Secure payment input frame"]');
    }
    getSubmitPaymentButton(){
        return cy.get('[id="submit"]');
    }
    deleteAccountWithZeroBalance(){
        cy.log("Delete account with zero balance")
        this.getProfile().click()
        this.getDeleteProfileButton().click();
        this.getSubmitDeleteButton().click();
        }
    deleteAccountWithNEgativeBalancePayment(cardNumber, date, cvc){
        cy.log("Delete account with negative balance + payment")
        this.getProfile().click();
        this.getDeleteProfileButton().click();
        this.getStripeButton().click();
        this.getStripeWindow().find('[id="Field-numberInput"]').type(cardNumber);
        this.getStripeWindow().find('[id="Field-expiryInput"]').type(date);
        this.getStripeWindow().find('[id="Field-cvcInput"]').type(cvc);
        this.getSubmitPaymentButton().click();
    }
    } export default new webDeletePage


    






