import authorizationPage from '../../support/pages/adminPanel/AuthorizationPage'
import superAdmin from '../../fixtures/superAdmin/superAdmin.json'
it("Auth for Super Admin ",() => {
    authorizationPage.visit();
    authorizationPage.submitLoginForm(superAdmin.email, superAdmin.password);
})