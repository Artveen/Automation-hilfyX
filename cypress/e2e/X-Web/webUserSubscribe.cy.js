import 'cypress-iframe'
import webSubscription from '../../support/pages/webClient/webSubscription'
import webAuthorizationPage from '../../support/pages/webClient/webAuthorizationPage'
import user from "../../fixtures/webClient/user.json"
import cardNumber from "../../fixtures/webClient/cardNumber.json"

describe ("Subscription test suite",()=>{
describe ("Positive scenarios",()=>{
    it("Success user subscription",()=>{
    webSubscription.visit();
    webAuthorizationPage.submitLoginForm(user.phoneNumber, user.code1, user.code2, user.code3, user.code4);
    webSubscription.getClientSubscription(cardNumber.cardNumber,cardNumber.date, cardNumber.cvc)
    })
})
})