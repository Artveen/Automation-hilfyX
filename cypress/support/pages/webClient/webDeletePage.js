class webDeletePage{
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
    getProfile(){
        return cy.get('[class="menu__center"] [class="font-bold foz-14"]')
    }
    getDeleteProfileButton(){
        return cy.get('[class="btn_delete"]') 
    }
    getSubmitDeleteButton(){
        return   cy.get('[class="ant-btn ant-btn-primary"]')
    }
    DeleteAccountWithZeroBalance(phoneNumber, code1, code2, code3, code4){
        cy.log("Delete account with zero balance")
        this.getPhoneNumberField().type(phoneNumber);
        this.getStartButton().click();
        this.getVerificationField1().type(code1);
        this.getVerificationField2().type(code2);
        this.getVerificationField3().type(code3);
        this.getVerificationField4().type(code4);
        this.getSubmitButton().click()
        this.getProfile().click()
        }
    } export default new webDeletePage