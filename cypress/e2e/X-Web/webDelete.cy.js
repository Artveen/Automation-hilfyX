import 'cypress-iframe'
import webDeletePage from "../../support/pages/webClient/webDeletePage";
import user from "../../fixtures/webClient/user.json"
import cardNumber from "../../fixtures/webClient/cardNumber.json"

describe ("Test suite for delete account", ()=>{
describe("Posititve scenarios",()=>{
 it.skip("Delete account with zero balance",()=>{
    webDeletePage.visit();
    webDeletePage.deleteAccountWithZeroBalance(user.phoneNumber, user.code1, user.code2, user.code3, user.code4);
 })
 it("Delete account with negative balance + payment",()=>{
    webDeletePage.visit();
    webDeletePage.deleteAccountWithNEgativeBalancePayment(user.phoneNumber, user.code1, user.code2, user.code3,user.code4, cardNumber.cardNumber, cardNumber.date, cardNumber.cvc)
 })
})
})