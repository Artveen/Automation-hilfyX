import 'cypress-iframe'
class webDeletePage{
    visit(){
        cy.visit('https://web.stage.dopomo.com.ua/cabinet')
    }
    getPhoneNumberField(){
        return cy.get('input.form-control');
    
    }
    getStartButton(){
        return cy.get('button.btn.btn_green.btn_h54');   
    } 
    getVerificationField1(){
       return cy.get('.form__container .form__item:nth-child(1) .form__input');
    }
    getVerificationField2(){
        return cy.get('.form__container .form__item:nth-child(2) .form__input');
    }
    getVerificationField3(){
        return cy.get('.form__container .form__item:nth-child(3) .form__input');
    }
    getVerificationField4(){
        return cy.get('.form__container .form__item:nth-child(4) .form__input');
    }
    getSubmitButton(){
        return cy.get('button.btn.btn_green.btn_h54');
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
    deleteAccountWithZeroBalance(phoneNumber, code1, code2, code3, code4){
        cy.log("Delete account with zero balance")
        this.getPhoneNumberField().type(phoneNumber);
        this.getStartButton().click();
        this.getVerificationField1().type(code1);
        this.getVerificationField2().type(code2);
        this.getVerificationField3().type(code3);
        this.getVerificationField4().type(code4);
        this.getSubmitButton().click()
        this.getProfile().click()
        this.getDeleteProfileButton().click();
        this.getSubmitButton().click();
        }
    deleteAccountWithNEgativeBalancePayment(phoneNumber, code1, code2, code3, code4, cardNumber, date, cvc){
        cy.log("Delete account with negative balance + payment")
        this.getPhoneNumberField().type(phoneNumber);
        this.getStartButton().click();
        this.getVerificationField1().type(code1);
        this.getVerificationField2().type(code2);
        this.getVerificationField3().type(code3);
        this.getVerificationField4().type(code4);
        this.getSubmitButton().click();
        this.getProfile().click();
        this.getDeleteProfileButton().click();
        this.getStripeButton().click();
        this.getStripeWindow().find('[id="Field-numberInput"]').type(cardNumber);
        this.getStripeWindow().find('[id="Field-expiryInput"]').type(date);
        this.getStripeWindow().find('[id="Field-cvcInput"]').type(cvc);
        this.getSubmitPaymentButton().click();
    }
    } export default new webDeletePage


    






