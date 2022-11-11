import authorizationPage from '../../support/pages/authorizationPage'
import superAdmin from '../../fixtures/superAdmin.json'
it("Auth for Super Admin ",() => {
    authorizationPage.visit();
    authorizationPage.submitLoginForm(superAdmin.email, superAdmin.password);
})