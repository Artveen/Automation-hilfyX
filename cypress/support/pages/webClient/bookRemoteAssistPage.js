class bookingPageRemoteAssist {
    visit(){
        cy.visit('https://web.stage.dopomo.com.ua/cabinet')
    }
    getBookingPage(){
        return cy.get('[class="page page_bg-pink"] .menu__option:nth-child(2)')
    }
    getTimePicker(){
        return cy.get('.time-slot_active')
    }
    getPromoCodeWindow(){
        return cy.get ('[class="btn btn_grey btn_h54"]')
    }
    getPromoCodeField(){
        return cy.get('[class="form__input form__input_uppercase "]')
    }
    applyPromoCode(){
        return cy.get('[class="form-item"]')
    }
    submitBooking(){
        return cy.contains('button.btn.btn_green', 'Book')
        
    }
    
    createOrderRemoteAssist(){
        cy.log("Create order remote assist")
        this.getBookingPage().click();
        this.getTimePicker().click();
        this.submitBooking().click();
        }
    createRemoteAssistWithReferalPromo(referal){
        cy.log("Create remote assist with referal promo")
        this.getBookingPage().click();
        this.getTimePicker().click();
        //this.getPromoCodeWindow().click();
        //this.getPromoCodeField().type(referal);
        //this.applyPromoCode().click();
        this.submitBooking().click();
    }
} export default new bookingPageRemoteAssist