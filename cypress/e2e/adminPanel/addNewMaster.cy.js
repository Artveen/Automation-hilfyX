import masterPage from '../../support/pages/adminPanel/masterPage'
import superAdmin from '../../fixtures/superAdmin/superAdmin.json'
import authorizationPage from '../../support/pages/adminPanel/AuthorizationPage'
import addMaster from '../../fixtures/superAdmin/addMaster.json'

it("Add new employee",()=>{
    masterPage.visit();
    authorizationPage.submitLoginForm(superAdmin.email, superAdmin.password);
    masterPage.createNewEmployee(addMaster.masterName, addMaster.masterSurname, addMaster.masterEmail, addMaster.masterPassword, addMaster.masterRepeatPassword);
})