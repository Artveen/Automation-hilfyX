import authorizationPage from "../../support/pages/adminPanel/authorizationPage";
import leadsPage from "../../support/pages/adminPanel/leadsPage"
import superAdmin from "../../fixtures/superAdmin/superAdmin.json"
import createLead from "../../fixtures/superAdmin/ createLead.json"

describe ("Tests for leads page",() =>{
    describe ("Positive scenarios", ()=>{
        it ("Assign lead",()=>{
            leadsPage.visit();
            authorizationPage.submitLoginForm(superAdmin.email, superAdmin.password);
            leadsPage.assignLead();
        })
        it.only("Delete lead",()=>{
            leadsPage.visit();
            authorizationPage.submitLoginForm(superAdmin.email, superAdmin.password)
            leadsPage.deleteNewLead();
        })
       it("Create new lead",()=>{
           leadsPage.visit();
           authorizationPage.submitLoginForm(superAdmin.email, superAdmin.password)
           leadsPage.createNewLead(createLead.address, createLead.leadName, createLead.leadSurname, createLead.phoneNumber);
       })
    })
})