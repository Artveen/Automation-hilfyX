import bookRemoteAssistPage from "../../support/pages/webClient/bookRemoteAssistPage";
import user from "../../fixtures/webClient/user.json"

describe("Test suite for booking remote assist",()=>{
describe("Positive scenarios",()=>{
    it("Book remote assist",()=>{
    bookRemoteAssistPage.visit();
    bookRemoteAssistPage.createOrderRemoteAssist(user.phoneNumber, user.code1, user.code2, user.code3, user.code4)
    })
})
})