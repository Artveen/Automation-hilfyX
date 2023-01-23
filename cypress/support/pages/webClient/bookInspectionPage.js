class bookInspectionPage{
    visit(){
        cy.visit('https://web.stage.dopomo.com.ua/cabinet');
    }
    getBackToMainMenuButton(){
        return cy.get('[class="cabinet-back__btn"]');
    }
    getBookInspectionScreen(){
        return cy.get('[class="page page_bg-pink"] .menu__option:nth-child(1)');
    }
    getPaymentButton(){
        return cy.get('[class="btn btn_green btn_h54"]');
    }
    getGetTheBillButton(){
        return cy.get('[class="btn btn_bill"]');
    }
    getOpenTheBillButton(){
        return cy.get('[class="ant-btn ant-btn-primary"]');
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
    getPromoCodeButton(){
        return cy.get('[class="btn btn_grey btn_h54"]');
    }
    getTypePromoCode(){
        return cy.get('[placeholder="AB012345"]')
    }
    getApplyPromoButton(){
        return cy.get('[class="form-item"]')
    }
    completeBookInspectionWithGetTheBill(){
        cy.log("Create order inspection with get the bill");
        this.getBackToMainMenuButton().click();
        this.getBookInspectionScreen().click();
        this.getPaymentButton().click();
        this.getGetTheBillButton().click();
        this.getOpenTheBillButton().click();
    }
    completeBookingWithPayment(cardNumber, date, cvc){
        cy.log("Create order with payment");
        this.getBackToMainMenuButton().click();
        this.getBookInspectionScreen().click();
        this.getPaymentButton().click();
        this.getStripeButton().click()
        this.getStripeWindow().find('[id="Field-numberInput"]').type(cardNumber);
        this.getStripeWindow().find('[id="Field-expiryInput"]').type(date);
        this.getStripeWindow().find('[id="Field-cvcInput"]').type(cvc);
        this.getSubmitPaymentButton().click();
    }
    completeBookingWithDiscountPromoAndPayment(discount, cardNumber, date, cvc){
        cy.log("Create order with discount promo and payment");
        this.getBackToMainMenuButton().click();
        this.getBookInspectionScreen().click();
        this.getPromoCodeButton().click();
        this.getTypePromoCode().type(discount);
        this.getApplyPromoButton().click().wait(5000);
        this.getPaymentButton().click();
        this.getStripeButton().click()
        this.getStripeWindow().find('[id="Field-numberInput"]').type(cardNumber);
        this.getStripeWindow().find('[id="Field-expiryInput"]').type(date);
        this.getStripeWindow().find('[id="Field-cvcInput"]').type(cvc);
        this.getSubmitPaymentButton().click();
    }
} export default new bookInspectionPage