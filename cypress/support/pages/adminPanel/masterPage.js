class masterPage{
    visit(){
        cy.visit('https://admin.stage.dopomo.com.ua/auth/login');
    }
    openEmployeePage(){
        return cy.get('.style_nav__menuLink__Zqjge[href="/admin/employee"]');
    }
    findAddEmployeeButton(){
        return cy.get('[class="button button_add button_bottom"]');
    }
    enterMasterName(){
        return cy.get('[name="first_name"]');
    }
    enterMasterSurname(){
        return cy.get('[name="last_name"]');
    }
    enterMasterEmail(){
        return cy.get('[name="email"]');
    }
    enterMasterPassword(){
        return cy.get('[name="password"]');
    }
    enterRepeatMasterPassword(){
        return cy.get('[name="repeatPassword"]');
    }
    pickService(){
        return cy.get('[name="service_uuids"]').eq(1);
    }
    pickLanguage(){
        return cy.get('[name="language_uuids"]').eq(1);
    }
    findSubmitCreationButton(){
        cy.get('[class="button button_medium button_foz14 ml_8"]')
    }
    createNewEmployee(masterName, masterSurname, masterEmail, masterPassword,masterRepeatPassword){
        cy.log('Create new employee')
        this.openEmployeePage().click();
        this.findAddEmployeeButton().click();
        this.enterMasterName().type(masterName);
        this.enterMasterSurname().type(masterSurname);
        this.enterMasterEmail().type(masterEmail);
        this.enterMasterPassword().type(masterPassword);
        this.enterRepeatMasterPassword().type(masterRepeatPassword);
        this.pickService().click();
        this.pickLanguage().click();
        this.findSubmitCreationButton().click();
    }
} export default new masterPage();
// cy.get('.style_nav__menuLink__Zqjge[href="/admin/employee"]').click();
// // cy.contains('21').parent().find('svg').click();
// cy.get('[viewBox="0 0 122.88 120.06"]').eq(0).click();
// cy.get('[class="button button_add button_foz14"]').click();
// let currentDate =  createCurrentDate();
// cy.get('[class="ant-picker-input ant-picker-input-active"]').click();
// findCurrentDate().click();
// cy.get('[class="ant-picker-header-next-btn"]').eq(1).dblclick();
// findCurrentDate().click();
// cy.get('[class^="working-day"]').eq(1).click();
// cy.get('[class^="working-day"]').eq(2).click();
// cy.get('[class^="working-day"]').eq(3).click();
// cy.get('[class^="working-day"]').eq(4).click();
// cy.get('[class^="working-day"]').eq(5).click();
// cy.get('[type="submit"]').click();


// // cy.get('[class="button button_add button_bottom"]').click();
// // cy.get('[name="first_name"]').type('Test');
// // cy.get('[name="last_name"]').type('Master');
// // cy.get('[name="email"]').type('ia.hilfy+837@gmail.com');
// // cy.get('[name="password"]').type('12345678',{force:true});
// // cy.get('[name="repeatPassword"]').type('12345678',{force:true});
// // cy.get('[name="service_uuids"]').eq(1).click();
// // cy.get('[name="language_uuids"]').eq(1).click();
// // cy.get('[class="button button_medium button_foz14 ml_8"]').click();