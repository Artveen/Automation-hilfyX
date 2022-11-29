import webDeletePage from "../../support/pages/webClient/webDeletePage";
import user from "../../fixtures/webClient/user.json"

describe ("Test suite for delete account", ()=>{
describe("Posititve scenarios",()=>{
 it("Delete account with zero balance",()=>{
    webDeletePage.visit();
    webDeletePage.DeleteAccountWithZeroBalance(user.phoneNumber, user.code1, user.code2, user.code3, user.code4);
 })
})
})