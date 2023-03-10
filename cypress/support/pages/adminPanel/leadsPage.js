class LeadsPage{
    visit(){
        cy.visit('https://admin.stage.dopomo.com.ua/auth/login');
    }
    openLeadsPage(){
        return cy.get('.style_nav__menuLink__Zqjge[href="/admin/leads"]')
    }
    openLead(){
        return cy.get('[class="style_listItem__JIwWN style_listItem_leads__hZKI1 c-p style_listItem_new___ZcWm"]').eq(0)
    }
    deleteLead(){
        return cy.get('[class="link-btn svg-icon svg-icon--big"]').eq(0)
    }
    findConfirmDeleteButton(){
        return cy.get('[class="ant-btn ant-btn-primary"]')
        }
    findPartnerField() {
        return cy.get('div.form-item_column  input[role]').last()
    }

    findSaveButton(){
        return cy.get ('[class="button button_medium button_foz14 ml_8"]')
    }
    findAcceptButton(){
        return cy.get('[class="ant-btn ant-btn-primary"]')
    }
    findCreateNewLeadButton(){
        return cy.get('[class="button button_add button_bottom"]')
    }
   findAddressField(){
        return cy.get('[name="address"]')
    }
    findNameField(){
        return cy.get('')
    }
    findSurnameField(){
        return cy.get('')
    }
    findPhoneNumberField(){
        return cy.get('[type="tel"]')
    }
    findSaveNewLeadButton(){
        return cy.get('[class="button button_medium button_foz14 ml_8"]')
    }

    assignLead(){
        cy.log('Assign new lead');
        this.openLeadsPage().click();
        this.openLead().click();
        this.findPartnerField().click().first().click()
        this.findSaveButton().click();
        this.findAcceptButton().click();
    }
    deleteNewLead(){
        cy.log('Delete lead');
        this.openLeadsPage().click();
        this.deleteLead().click();
        this.findConfirmDeleteButton().click();
    }
    createNewLead(address, name, surname, phoneNumber){
        cy.log('Create new lead');
        this.openLeadsPage().click();
        this.findCreateNewLeadButton().click();
        this.findAddressField().type(address);
        this.findPartnerField().click().first().click();
        this.findNameField().type(name);
        this.findSurnameField().type(surname);
        this.findPhoneNumberField().type(phoneNumber);
        this.findSaveNewLeadButton().click();
    }
}export default new LeadsPage();