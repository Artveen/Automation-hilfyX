import 'cypress-iframe';
import bookInspectionPage from "../../support/pages/webClient/bookInspectionPage";
import webProfilePage from "../../support/pages/webClient/webProfilePage";
import webAuthorizationPage from "../../support/pages/webClient/webAuthorizationPage";
import user from "../../fixtures/webClient/user.json"
import promoCodes from "../../fixtures/webClient/promoCodes.json"
import billingAddress from "../../fixtures/webClient/billingAddress.json"
import clientAddress from "../../fixtures/webClient/clientAddress.json"
import cardNumber from "../../fixtures/webClient/cardNumber.json"

describe("Test suite for booking inspection and get the bill",()=>{
    describe("Positive scenarios",()=>{
        it("Book inspection with payment",()=>{
            bookInspectionPage.visit();
            webAuthorizationPage.submitLoginForm(user.phoneNumber, user.code1, user.code2, user.code3, user.code4);
            webProfilePage.addAddressAndBillingAddress(billingAddress.firstName, billingAddress.surName, billingAddress.street, billingAddress.houseNumber, billingAddress.country, billingAddress.city, billingAddress.zipCode,clientAddress.address, clientAddress.flat, clientAddress.comment);
            bookInspectionPage.completeBookingWithPayment(cardNumber.cardNumber, cardNumber.date, cardNumber.cvc);
        })
        it("Book inspection with payment and discount promo",()=>{
            bookInspectionPage.visit();
            webAuthorizationPage.submitLoginForm(user.phoneNumber, user.code1, user.code2, user.code3, user.code4);
            webProfilePage.addAddressAndBillingAddress(billingAddress.firstName, billingAddress.surName, billingAddress.street, billingAddress.houseNumber, billingAddress.country, billingAddress.city, billingAddress.zipCode,clientAddress.address, clientAddress.flat, clientAddress.comment);
            bookInspectionPage.completeBookingWithDiscountPromoAndPayment(promoCodes.discount,cardNumber.cardNumber, cardNumber.date, cardNumber.cvc);
        })
        it("Book inspection and get the bill",()=>{
            bookInspectionPage.visit();
            webAuthorizationPage.submitLoginForm(user.phoneNumber, user.code1, user.code2, user.code3, user.code4);
            webProfilePage.addAddressAndBillingAddress(billingAddress.firstName, billingAddress.surName, billingAddress.street, billingAddress.houseNumber, billingAddress.country, billingAddress.city, billingAddress.zipCode,clientAddress.address, clientAddress.flat, clientAddress.comment);
            bookInspectionPage.completeBookInspectionWithGetTheBill();
        })
})
})
