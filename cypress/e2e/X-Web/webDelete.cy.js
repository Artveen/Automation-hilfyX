import 'cypress-iframe'
import webDeletePage from "../../support/pages/webClient/webDeletePage";
import user from "../../fixtures/webClient/user.json"
import cardNumber from "../../fixtures/webClient/cardNumber.json"
import webAuthorizationPage from '../../support/pages/webClient/webAuthorizationPage'


describe ("Test suite for delete account", ()=>{
describe("Posititve scenarios",()=>{
 it("Delete account with zero balance",()=>{
    webDeletePage.visit();
    webAuthorizationPage.submitLoginForm(user.phoneNumber, user.code1, user.code2, user.code3, user.code4);
    webDeletePage.deleteAccountWithZeroBalance();
 })
 it.only("Delete account with negative balance + payment",()=>{
    webDeletePage.visit();
    webAuthorizationPage.submitLoginForm(user.phoneNumber, user.code1, user.code2, user.code3, user.code4);
    webDeletePage.deleteAccountWithNEgativeBalancePayment(cardNumber.cardNumber, cardNumber.date, cardNumber.cvc)
 })
})
})