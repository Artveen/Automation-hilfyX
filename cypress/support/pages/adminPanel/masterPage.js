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
    pickServiceElectricity(){
        return cy.get('[name="service_uuids"]').eq(0);
    }
    pickServicePlumber(){
        return cy.get('[name="service_uuids"]').eq(1);
    }
    pickServiceHandyman(){
        return cy.get('[name="service_uuids"]').eq(2);
    }
    pickServiceInspection(){
        return cy.get('[name="service_uuids"]').eq(3);
    }
    pickLanguage(){
        return cy.get('[name="language_uuids"]').eq(1);
    }
    findSubmitCreationButton(){
        return cy.get('[class="button button_medium button_foz14 ml_8"]')
    }
    findScheduleCreatorButton(){
        return cy.get('[viewBox="0 0 122.88 120.06"]').eq(0)
    }
    findAddScheduleButton(){
       return cy.get('[class="button button_add button_foz14"]')
    }

    findCurrentDate(){
            const date = new Date();
            let currentDate = date.getDate()
            return cy.get('[class="ant-picker-cell-inner"]').contains(currentDate)
        }

    choseFinishMonth(){
        return cy.get('[class="ant-picker-header-next-btn"]').eq(1);
    }
    choseMonday(){
        return cy.get('[class^="working-day"]').eq(1);
    }
    choseTuesday(){
        return cy.get('[class^="working-day"]').eq(2);
    }
    choseWednesday(){
        return cy.get('[class^="working-day"]').eq(3);
    }
    choseThursday(){
        return cy.get('[class^="working-day"]').eq(4);
    }
    choseFriday(){
        return cy.get('[class^="working-day"]').eq(5);
    }
    choseSaturday(){
        return cy.get('[class^="working-day"]').eq(6);
    }
    choseSunday(){
        return cy.get('[class^="working-day"]').eq(7);
    }
    findSubmitScheduleButton(){
        return cy.get('[type="submit"]');
    }

    createNewEmployeeMonday(masterName, masterSurname, masterEmail, masterPassword,masterRepeatPassword){
        cy.log('Create electricity with plumber only monday schedule')
        this.openEmployeePage().click();
        this.findAddEmployeeButton().click();
        this.enterMasterName().type(masterName);
        this.enterMasterSurname().type(masterSurname);
        this.enterMasterEmail().type(masterEmail);
        this.enterMasterPassword().type(masterPassword,{force:true});
        this.enterRepeatMasterPassword().type(masterRepeatPassword);
        this.pickServicePlumber().click();
        this.pickLanguage().click();
        this.findSubmitCreationButton().click();
        this.findScheduleCreatorButton().click();
        this.findAddScheduleButton().click();
        cy.get('[class="ant-picker-input ant-picker-input-active"]').click();
        this.findCurrentDate().click();
        this.choseFinishMonth().dblclick();
        this.findCurrentDate().click();
        this.choseMonday().click();
        this.findSubmitScheduleButton().click();
    }
    createNewEmployeeTuesday(masterName, masterSurname, masterEmail, masterPassword,masterRepeatPassword){
        cy.log('Create electricity with plumber only monday schedule')
        this.openEmployeePage().click();
        this.findAddEmployeeButton().click();
        this.enterMasterName().type(masterName);
        this.enterMasterSurname().type(masterSurname);
        this.enterMasterEmail().type(masterEmail);
        this.enterMasterPassword().type(masterPassword,{force:true});
        this.enterRepeatMasterPassword().type(masterRepeatPassword);
        this.pickServicePlumber().click();
        this.pickServiceElectricity().click();
        this.pickLanguage().click();
        this.findSubmitCreationButton().click();
        this.findScheduleCreatorButton().click();
        this.findAddScheduleButton().click();
        cy.get('[class="ant-picker-input ant-picker-input-active"]').click();
        this.findCurrentDate().click();
        this.choseFinishMonth().dblclick();
        this.findCurrentDate().click();
        this.choseTuesday().click();
        this.findSubmitScheduleButton().click();
    }
    createNewEmployeeWednesday(masterName, masterSurname, masterEmail, masterPassword,masterRepeatPassword){
        cy.log('Create electricity with handyman only wednesday schedule')
        this.openEmployeePage().click();
        this.findAddEmployeeButton().click();
        this.enterMasterName().type(masterName);
        this.enterMasterSurname().type(masterSurname);
        this.enterMasterEmail().type(masterEmail);
        this.enterMasterPassword().type(masterPassword,{force:true});
        this.enterRepeatMasterPassword().type(masterRepeatPassword);
        this.pickServiceHandyman().click();
        this.pickServiceElectricity().click();
        this.pickLanguage().click();
        this.findSubmitCreationButton().click();
        this.findScheduleCreatorButton().click();
        this.findAddScheduleButton().click();
        cy.get('[class="ant-picker-input ant-picker-input-active"]').click();
        this.findCurrentDate().click();
        this.choseFinishMonth().dblclick();
        this.findCurrentDate().click();
        this.choseWednesday().click();
        this.findSubmitScheduleButton().click();
    }
    createNewEmployeeThursday(masterName, masterSurname, masterEmail, masterPassword,masterRepeatPassword){
        cy.log('Create inspection only thursday schedule')
        this.openEmployeePage().click();
        this.findAddEmployeeButton().click();
        this.enterMasterName().type(masterName);
        this.enterMasterSurname().type(masterSurname);
        this.enterMasterEmail().type(masterEmail);
        this.enterMasterPassword().type(masterPassword,{force:true});
        this.enterRepeatMasterPassword().type(masterRepeatPassword);
        this.pickServiceInspection().click();
        this.pickLanguage().click();
        this.findSubmitCreationButton().click();
        this.findScheduleCreatorButton().click();
        this.findAddScheduleButton().click();
        cy.get('[class="ant-picker-input ant-picker-input-active"]').click();
        this.findCurrentDate().click();
        this.choseFinishMonth().dblclick();
        this.findCurrentDate().click();
        this.choseThursday().click();
        this.findSubmitScheduleButton().click();
    }
    createNewEmployeeFriday(masterName, masterSurname, masterEmail, masterPassword,masterRepeatPassword){
        cy.log('Create handyman only friday schedule')
        this.openEmployeePage().click();
        this.findAddEmployeeButton().click();
        this.enterMasterName().type(masterName);
        this.enterMasterSurname().type(masterSurname);
        this.enterMasterEmail().type(masterEmail);
        this.enterMasterPassword().type(masterPassword,{force:true});
        this.enterRepeatMasterPassword().type(masterRepeatPassword);
        this.pickServiceHandyman().click();
        this.pickLanguage().click();
        this.findSubmitCreationButton().click();
        this.findScheduleCreatorButton().click();
        this.findAddScheduleButton().click();
        cy.get('[class="ant-picker-input ant-picker-input-active"]').click();
        this.findCurrentDate().click();
        this.choseFinishMonth().dblclick();
        this.findCurrentDate().click();
        this.choseFriday().click();
        this.findSubmitScheduleButton().click();
    }
    createNewEmployeeSaturday(masterName, masterSurname, masterEmail, masterPassword,masterRepeatPassword){
        cy.log('Create handyman with plumber with electricity only saturday schedule')
        this.openEmployeePage().click();
        this.findAddEmployeeButton().click();
        this.enterMasterName().type(masterName);
        this.enterMasterSurname().type(masterSurname);
        this.enterMasterEmail().type(masterEmail);
        this.enterMasterPassword().type(masterPassword,{force:true});
        this.enterRepeatMasterPassword().type(masterRepeatPassword);
        this.pickServiceElectricity().click();
        this.pickServicePlumber().click();
        this.pickServiceHandyman().click();
        this.pickLanguage().click();
        this.findSubmitCreationButton().click();
        this.findScheduleCreatorButton().click();
        this.findAddScheduleButton().click();
        cy.get('[class="ant-picker-input ant-picker-input-active"]').click();
        this.findCurrentDate().click();
        this.choseFinishMonth().dblclick();
        this.findCurrentDate().click();
        this.choseSaturday().click();
        this.findSubmitScheduleButton().click();
    }
    createNewEmployeeSevenDays(masterName, masterSurname, masterEmail, masterPassword,masterRepeatPassword){
        cy.log('Create handyman with plumber with electricity and inspection with seven days schedule')
        this.openEmployeePage().click();
        this.findAddEmployeeButton().click();
        this.enterMasterName().type(masterName);
        this.enterMasterSurname().type(masterSurname);
        this.enterMasterEmail().type(masterEmail);
        this.enterMasterPassword().type(masterPassword,{force:true});
        this.enterRepeatMasterPassword().type(masterRepeatPassword);
        this.pickServiceElectricity().click();
        this.pickServicePlumber().click();
        this.pickServiceHandyman().click();
        this.pickServiceInspection().click();
        this.pickLanguage().click();
        this.findSubmitCreationButton().click();
        this.findScheduleCreatorButton().click();
        this.findAddScheduleButton().click();
        cy.get('[class="ant-picker-input ant-picker-input-active"]').click();
        this.findCurrentDate().click();
        this.choseFinishMonth().dblclick();
        this.findCurrentDate().click();
        this.choseMonday().click();
        this.choseTuesday().click();
        this.choseWednesday().click();
        this.choseThursday().click();
        this.choseFriday().click();
        this.choseSaturday().click();
        this.choseSunday().click();
        this.findSubmitScheduleButton().click();
    }
} export default new masterPage();
