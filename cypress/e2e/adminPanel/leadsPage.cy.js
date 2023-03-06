import authorizationPage from "../../support/pages/adminPanel/authorizationPage";
import superAdmin from "../../fixtures/superAdmin/superAdmin.json"
import leadsPage from "../../support/pages/adminPanel/leadsPage"

describe ("Tests for leads page",() =>{
    describe ("Positive scenarios", ()=>{
        it ("Assign lead",()=>{
            leadsPage.visit();
            authorizationPage.submitLoginForm(superAdmin.email, superAdmin.password)
        })

    })
})