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
    getClosePromoModal(){
        return cy.get('[class="lib-modal lib-modal_bottom lib-modal_show"]')
    }
    getCloseSuccessPaymentNotification(){
        return cy.get('[d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"]')
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
        this.getSubmitPaymentButton().click().wait(4000);
        this.getClosePromoModal().click();
        this.getCloseSuccessPaymentNotification().click();
        this.getDeleteProfileButton().click();
        this.getSubmitDeleteButton().click();
    }
    } export default new webDeletePage


    






