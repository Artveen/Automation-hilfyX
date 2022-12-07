import webAuthorizationPage from "../../support/pages/webClient/webAuthorizationPage"
import webProfilePage from "../../support/pages/webClient/webProfilePage"
import user from "../../fixtures/webClient/user.json"
import billingAddress from "../../fixtures/webClient/billingAddress.json"
import clientAddress from "../../fixtures/webClient/clientAddress.json"
import userProfile from "../../fixtures/webClient/userProfile.json"

describe ("Test suite for profile web client",()=>{
describe("Positive scenarios",()=>{
    it("Add short billing address",()=>{
        webProfilePage.visit();
        webAuthorizationPage.submitLoginForm(user.phoneNumber, user.code1, user.code2, user.code3, user.code4);
        webProfilePage.addBillingAddress(billingAddress.shortFirstName, billingAddress.shortSurName, billingAddress.shortStreet, billingAddress.shortHouseNumber, billingAddress.shortCountry, billingAddress.shortCity, billingAddress.shortZipCode);
    })
    it("Add long billing address",()=>{
        webProfilePage.visit();
        webAuthorizationPage.submitLoginForm(user.phoneNumber, user.code1, user.code2, user.code3, user.code4);
        webProfilePage.addBillingAddress(billingAddress.longFirstName, billingAddress.longSurName, billingAddress.longStreet, billingAddress.longHouseNumber, billingAddress.longCountry, billingAddress.longCity, billingAddress.longZipCode);
    })
    it("Add billing address",()=>{
        webProfilePage.visit();
        webAuthorizationPage.submitLoginForm(user.phoneNumber, user.code1, user.code2, user.code3, user.code4);
        webProfilePage.addBillingAddress(billingAddress.firstName, billingAddress.surName, billingAddress.street, billingAddress.houseNumber, billingAddress.country, billingAddress.city, billingAddress.zipCode);
    })
    it("Add address",()=>{
        webProfilePage.visit();
        webAuthorizationPage.submitLoginForm(user.phoneNumber, user.code1, user.code2, user.code3, user.code4);
        webProfilePage.addAddress(clientAddress.address, clientAddress.flat, clientAddress.comment)
        })
    it("Change profile",()=>{
        webProfilePage.visit();
        webAuthorizationPage.submitLoginForm(user.phoneNumber, user.code1, user.code2, user.code3, user.code4);
        webProfilePage.changeClientName(userProfile.longName, userProfile.longSurname, userProfile.longEmail);
    })
})
})