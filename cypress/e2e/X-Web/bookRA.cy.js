import bookRemoteAssistPage from "../../support/pages/webClient/bookRemoteAssistPage";
import webAuthorizationPage from '../../support/pages/webClient/webAuthorizationPage'
import user from "../../fixtures/webClient/user.json"
import promoCodes from "../../fixtures/webClient/promoCodes.json"


describe("Test suite for booking remote assist",()=>{
describe("Positive scenarios",()=>{
    it("Book remote assist",()=>{
    bookRemoteAssistPage.visit();
    webAuthorizationPage.submitLoginForm(user.phoneNumber, user.code1, user.code2, user.code3, user.code4);
   bookRemoteAssistPage.createOrderRemoteAssist()
    })
    it("Booking with referal promo",()=>{
    bookRemoteAssistPage.visit();
    webAuthorizationPage.submitLoginForm(user.phoneNumber, user.code1, user.code2, user.code3, user.code4);
    bookRemoteAssistPage.createRemoteAssistWithReferalPromo(promoCodes.referal)
    })
})
})
