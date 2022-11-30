import 'cypress-iframe'
import webSubscription from '../../support/pages/webClient/webSubscription'
import user from "../../fixtures/webClient/user.json"
import cardNumber from "../../fixtures/webClient/cardNumber.json"

describe ("Subscription test suite",()=>{
describe ("Positive scenarios",()=>{
    it("Success user subscription",()=>{
    webSubscription.visit();
    webSubscription.getClientSubscription(user.phoneNumber, user.code1, user.code2, user.code3, user.code4, cardNumber.cardNumber,cardNumber.date, cardNumber.cvc)
    })
})
})