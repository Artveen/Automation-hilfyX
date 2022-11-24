import webRegistrationPage from "../../support/pages/webClient/webRegistrationPage";
import registrationUser from "../../fixtures/webClient/reristrationUser.json"
import longdUserRegistration from "../../fixtures/webClient/longUserRegistration.json"
import user from "../../fixtures/webClient/user.json"

describe("Test suit for user registration", ()=>{
describe ("Positive scenarios",()=>{
it("Registration with long creds",()=>{
    webRegistrationPage.visit();
    webRegistrationPage.registrationWithLongCreds(user.phoneNumber, user.code1, user.code2, user.code3, user.code4, longdUserRegistration.longName, longdUserRegistration.longSurname, longdUserRegistration.longEmail);
})
it("Complete registration",()=>{
    webRegistrationPage.visit();
    webRegistrationPage.positiveRegistrationCase(user.phoneNumber, user.code1, user.code2, user.code3, user.code4, registrationUser.name, registrationUser.surname, registrationUser.email);
})
})
})