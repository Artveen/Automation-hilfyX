import masterPage from '../../support/pages/adminPanel/masterPage'
import superAdmin from '../../fixtures/superAdmin/superAdmin.json'
import authorizationPage from '../../support/pages/adminPanel/AuthorizationPage'
import addMaster from '../../fixtures/superAdmin/addMaster.json'

it("Create plumber only monday schedule",()=>{
    masterPage.visit();
    authorizationPage.submitLoginForm(superAdmin.email, superAdmin.password);
    masterPage.createNewEmployeeMonday(addMaster.masterName, addMaster.masterSurname, addMaster.masterEmail, addMaster.masterPassword, addMaster.masterRepeatPassword);
})
it("Create electricity with plumber only tuesday schedule",()=>{
    masterPage.visit();
    authorizationPage.submitLoginForm(superAdmin.email, superAdmin.password);
    masterPage.createNewEmployeeTuesday(addMaster.masterName2, addMaster.masterSurname2, addMaster.masterEmail2, addMaster.masterPassword2, addMaster.masterRepeatPassword2);
})
it("Create electricity with handyman only wednesday schedule",()=>{
    masterPage.visit();
    authorizationPage.submitLoginForm(superAdmin.email, superAdmin.password);
    masterPage.createNewEmployeeWednesday(addMaster.masterName3, addMaster.masterSurname3, addMaster.masterEmail3, addMaster.masterPassword3, addMaster.masterRepeatPassword3);
})
it("Create inspection only thursday schedule",()=>{
    masterPage.visit();
    authorizationPage.submitLoginForm(superAdmin.email, superAdmin.password);
    masterPage.createNewEmployeeThursday(addMaster.masterName4, addMaster.masterSurname4, addMaster.masterEmail4, addMaster.masterPassword4, addMaster.masterRepeatPassword4);
})
it("Create handyman only friday schedule",()=>{
    masterPage.visit();
    authorizationPage.submitLoginForm(superAdmin.email, superAdmin.password);
    masterPage.createNewEmployeeFriday(addMaster.masterName5, addMaster.masterSurname5, addMaster.masterEmail5, addMaster.masterPassword5, addMaster.masterRepeatPassword5);
})
it("Create handyman with plumber with electricity only saturday schedule",()=>{
    masterPage.visit();
    authorizationPage.submitLoginForm(superAdmin.email, superAdmin.password);
    masterPage.createNewEmployeeSaturday(addMaster.masterName6, addMaster.masterSurname6, addMaster.masterEmail6, addMaster.masterPassword6, addMaster.masterRepeatPassword6);
})
it.only("Create handyman with plumber with electricity only saturday schedule",()=>{
    masterPage.visit();
    authorizationPage.submitLoginForm(superAdmin.email, superAdmin.password);
    masterPage.createNewEmployeeSevenDays(addMaster.masterName7, addMaster.masterSurname7, addMaster.masterEmail7, addMaster.masterPassword7, addMaster.masterRepeatPassword7);
})