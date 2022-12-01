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
    submitBooking(){
        return cy.get('[class="btn btn_green btn_h54"]') 
    }
    createOrderRemoteAssist(){
        cy.log("Create order remote assist")
        this.getSubmitButton().click();
        this.getBookingPage().click();
        this.getTimePicker().click();
        this.submitBooking().click();
        }
} export default new bookingPageRemoteAssist