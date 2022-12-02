import bookRemoteAssistPage from "../../support/pages/webClient/bookRemoteAssistPage";
import webAuthorizationPage from '../../support/pages/webClient/webAuthorizationPage'
import user from "../../fixtures/webClient/user.json"
import promoCodes from "../../fixtures/webClient/promoCodes.json"

let token;

describe("Test suite for booking remote assist",()=>{
describe("Positive scenarios",()=>{
    it("Book remote assist",()=>{
    bookRemoteAssistPage.visit();
    webAuthorizationPage.submitLoginForm(user.phoneNumber, user.code1, user.code2, user.code3, user.code4);
    cy.get('[class="page page_bg-pink"] .menu__option:nth-child(2)').should('be.visible') .then(()=>{
    cy.getCookie('access_token') .then(cookie =>{
    token = cookie.value
    })  
    bookRemoteAssistPage.createOrderRemoteAssist()
    })
    it("Booking with referal promo",()=>{
    bookRemoteAssistPage.visit();
    cy.setCookie('access_token', token);
    bookRemoteAssistPage.createRemoteAssistWithReferalPromo(promoCodes.referal)
    })
})
})
})