import clientsPage from '../../support/pages/adminPanel/clientsPage'
import superAdmin from '../../fixtures/superAdmin/superAdmin.json'
it("Auth for Super Admin ",() => {
    clientsPage.visit();
    clientsPage.submitLoginForm(superAdmin.email, superAdmin.password);
    clientsPage.submitClientBalance();
})