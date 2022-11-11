import clientsPage from '../../support/pages/clientsPage'
import superAdmin from '../../fixtures/superAdmin.json'
it("Auth for Super Admin ",() => {
    clientsPage.visit();
    clientsPage.submitLoginForm(superAdmin.email, superAdmin.password);
    clientsPage.submitClientBalance();
})