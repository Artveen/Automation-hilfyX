import authorizationPage from '../../support/pages/adminPanel/AuthorizationPage'
import superAdmin from '../../fixtures/superAdmin/superAdmin.json'
import unValidCredForAdmin from '../../fixtures/superAdmin/unValidCredForAdmin.json'

describe('Test suite for  SuperAdmin', () => {
describe ('Positive scenarios', () =>{
it("Auth for Super Admin ",() => {
        authorizationPage.visit();
        authorizationPage.submitLoginForm(superAdmin.email, superAdmin.password);
    })
})
describe('Negative scenarios', ()=>{
    it("Submit with negative Email",()=>{
        authorizationPage.visit();
        authorizationPage.submitLoginForm(unValidCredForAdmin.Email, unValidCredForAdmin.Password);
           })
    it("Submit with 300 symbols in email",()=>{
        authorizationPage.visit();
        authorizationPage.submitLoginForm(unValidCredForAdmin.email1, unValidCredForAdmin.Password);
            })
    it("Submit with short password",()=>{
        authorizationPage.visit();
        authorizationPage.submitLoginForm(superAdmin.email, unValidCredForAdmin.password1);
            })
    it("Submit with uncorrect long password",()=>{
        authorizationPage.visit();
        authorizationPage.submitLoginForm(superAdmin.email, unValidCredForAdmin.password1);
            })
})
})

        
       