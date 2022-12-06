import webRegistrationPage from "../../support/pages/webClient/webRegistrationPage";
import webAuthorizationPage from '../../support/pages/webClient/webAuthorizationPage'
import registrationUser from "../../fixtures/webClient/registrationUser.json"
import longUserRegistration from "../../fixtures/webClient/longUserRegistration.json"
import user from "../../fixtures/webClient/user.json"

describe("Test suit for user registration", ()=>{
describe ("Positive scenarios",()=>{
it("Registration with long creds",()=>{
    webRegistrationPage.visit();
    webAuthorizationPage.submitLoginForm(user.phoneNumber, user.code1, user.code2, user.code3, user.code4);
    webRegistrationPage.registrationWithLongCreds(longUserRegistration.longName, longUserRegistration.longSurname, longUserRegistration.longEmail);
})
it("Complete registration",()=>{
    webRegistrationPage.visit();
    webAuthorizationPage.submitLoginForm(user.phoneNumber, user.code1, user.code2, user.code3, user.code4);
    webRegistrationPage.positiveRegistrationCase(registrationUser.name, registrationUser.surname, registrationUser.email);
})
})
})