import clientsPage from '../../support/pages/adminPanel/clientsPage'
import authorizationPage from "../../support/pages/adminPanel/authorizationPage";
import superAdmin from '../../fixtures/superAdmin/superAdmin.json'
it("Auth for Super Admin ",() => {
    clientsPage.visit();
    authorizationPage.submitLoginForm(superAdmin.email, superAdmin.password);
    clientsPage.submitClientBalance();
})