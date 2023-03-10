import masterPage from '../../support/pages/adminPanel/masterPage'
import authorizationPage from '../../support/pages/adminPanel/AuthorizationPage'
import superAdmin from '../../fixtures/superAdmin/superAdmin.json'
import addMaster from '../../fixtures/superAdmin/addMaster.json'
import {deleteEmployee} from '../../support/helper'

it("Create plumber only monday schedule",()=>{
    masterPage.visit();
    authorizationPage.submitLoginForm(superAdmin.email, superAdmin.password);
    masterPage.createNewEmployeeMonday(addMaster[0].masterName, addMaster[0].masterSurname, addMaster[0].masterEmail, addMaster[0].masterPassword, addMaster[0].masterRepeatPassword);
})
it("Create electricity with plumber only tuesday schedule",()=>{
    masterPage.visit();
    authorizationPage.submitLoginForm(superAdmin.email, superAdmin.password);
    masterPage.createNewEmployeeTuesday(addMaster[1].masterName, addMaster[1].masterSurname, addMaster[1].masterEmail, addMaster[1].masterPassword, addMaster[1].masterRepeatPassword);
})
it("Create electricity with handyman only wednesday schedule",()=>{
    masterPage.visit();
    authorizationPage.submitLoginForm(superAdmin.email, superAdmin.password);
    masterPage.createNewEmployeeWednesday(addMaster[2].masterName, addMaster[2].masterSurname, addMaster[2].masterEmail, addMaster[2].masterPassword, addMaster[2].masterRepeatPassword);
})
it("Create inspection only thursday schedule",()=>{
    masterPage.visit();
    authorizationPage.submitLoginForm(superAdmin.email, superAdmin.password);
    masterPage.createNewEmployeeThursday(addMaster[3].masterName, addMaster[3].masterSurname, addMaster[3].masterEmail, addMaster[3].masterPassword, addMaster[3].masterRepeatPassword);
})
it("Create handyman only friday schedule",()=>{
    masterPage.visit();
    authorizationPage.submitLoginForm(superAdmin.email, superAdmin.password);
    masterPage.createNewEmployeeFriday(addMaster[4].masterName, addMaster[4].masterSurname, addMaster[4].masterEmail, addMaster[4].masterPassword, addMaster[4].masterRepeatPassword);
})
it("Create handyman with plumber with electricity only saturday schedule",()=>{
    masterPage.visit();
    authorizationPage.submitLoginForm(superAdmin.email, superAdmin.password);
    masterPage.createNewEmployeeSaturday(addMaster[5].masterName, addMaster[5].masterSurname, addMaster[5].masterEmail, addMaster[5].masterPassword, addMaster[5].masterRepeatPassword);
})
it("Create handyman with plumber with electricity only saturday schedule",()=>{
    masterPage.visit();
    authorizationPage.submitLoginForm(superAdmin.email, superAdmin.password);
    masterPage.createNewEmployeeSevenDays(addMaster[6].masterName, addMaster[6].masterSurname, addMaster[6].masterEmail, addMaster[6].masterPassword, addMaster[6].masterRepeatPassword);
})
after(()=>{
    for(let i=0; i<addMaster.length-1; i ++){
        deleteEmployee(addMaster[i].masterEmail)
    }
})