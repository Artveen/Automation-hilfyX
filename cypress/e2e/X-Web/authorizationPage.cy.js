import webAuthorizationPage from "../../support/pages/webClient/webAuthorizationPage";
import user from "../../fixtures/webClient/user.json"


describe("Test Suite for login in web client",()=>{
describe("Positive scenarios",()=>{
it("Authorization",()=>{
    webAuthorizationPage.visit();
    webAuthorizationPage.submitLoginForm(user.phoneNumber, user.code1, user.code2, user.code3, user.code4)
})
})
describe("Negative scenarios", ()=>{
it("Auth with wrong code",()=>{
    webAuthorizationPage.visit();
    cy.wait(50000)
    webAuthorizationPage.submitLoginFormWithWrongCode(user.phoneNumber, user.incorrectCode1, user.incorrectCode2,user.incorrectCode3, user.incorrectCode4)
})    
})
})