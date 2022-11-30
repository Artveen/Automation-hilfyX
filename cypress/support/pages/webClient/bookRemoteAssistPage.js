class bookingPageRemoteAssist {
    visit(){
        cy.visit('https://web.stage.dopomo.com.ua/cabinet')
    }
    getPhoneNumberField(){
        return cy.get('input.form-control')
    
    }
    getStartButton(){
        return cy.get('button.btn.btn_green.btn_h54')   
    } 
    getVerificationField1(){
       return cy.get('.form__container .form__item:nth-child(1) .form__input')
    }
    getVerificationField2(){
        return cy.get('.form__container .form__item:nth-child(2) .form__input')
    }
    getVerificationField3(){
        return cy.get('.form__container .form__item:nth-child(3) .form__input')
    }
    getVerificationField4(){
        return cy.get('.form__container .form__item:nth-child(4) .form__input')
    }
    getSubmitButton(){
        return cy.get('button.btn.btn_green.btn_h54')
    }
    getBookingPage(){
        return cy.get('[class="page page_bg-pink"] .menu__option:nth-child(2)')
    }
    getTimePicker(){
        return cy.get('.time-slot_active')
    }
    submitBooking(){
        return cy.get('[class="btn btn_green btn_h54"]') 
    }
    createOrderRemoteAssist(phoneNumber, code1, code2, code3, code4){
        cy.log("Create order remote assist")
        this.getPhoneNumberField().type(phoneNumber);
        this.getStartButton().click();
        this.getVerificationField1().type(code1);
        this.getVerificationField2().type(code2);
        this.getVerificationField3().type(code3);
        this.getVerificationField4().type(code4);
        this.getSubmitButton().click();
        this.getBookingPage().click();
        this.getTimePicker().click();
        this.submitBooking().click();
        }
} export default new bookingPageRemoteAssist