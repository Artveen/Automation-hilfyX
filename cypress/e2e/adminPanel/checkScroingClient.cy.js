import authorizationPage from "../../support/pages/adminPanel/authorizationPage";
import scoringPage from "../../support/pages/adminPanel/scoringPage"
import superAdmin from "../../fixtures/superAdmin/superAdmin.json"

describe ('Test suite for scoring page',() =>{
describe ('Positive scenarios', ()=>{
    it("Check client scoring",()=>{
    scoringPage.visit();
    authorizationPage.submitLoginForm(superAdmin.email, superAdmin.password);
    scoringPage.checkClientScoring();
})
it("Create lead from scoring",()=>{
    scoringPage.visit();
    authorizationPage.submitLoginForm(superAdmin.email, superAdmin.password);
    scoringPage.createLeadFromScoring();
})
})   
})