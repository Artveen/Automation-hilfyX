import masterPage from "../support/pages/adminPanel/masterPage";
import authorizationPage from "../support/pages/adminPanel/authorizationPage";
import superAdmin from "../fixtures/superAdmin/superAdmin.json";

describe ('Test suite for master page',()=>{
    describe('Positive scenarios',()=>{
        it('Add new master',()=>{
            masterPage.visit();
            authorizationPage.submitLoginForm(superAdmin.email, superAdmin.password);
            cy.get('.style_nav__menuLink__Zqjge[href="/admin/employee"]').click();
            // cy.contains('21').parent().find('svg').click();
            cy.get('[viewBox="0 0 122.88 120.06"]').eq(0).click();
            cy.get('[class="button button_add button_foz14"]').click();
            cy.get('[class="ant-picker-input ant-picker-input-active"]').click();
            findCurrentDate().click();
            cy.get('[class="ant-picker-header-next-btn"]').eq(1).dblclick();
            findCurrentDate().click();
            cy.get('[class^="working-day"]').eq(1).click();
            cy.get('[class^="working-day"]').eq(2).click();
            cy.get('[class^="working-day"]').eq(3).click();
            cy.get('[class^="working-day"]').eq(4).click();
            cy.get('[class^="working-day"]').eq(5).click();
            cy.get('[type="submit"]').click();
            // cy.get('[class="button button_add button_bottom"]').click();
            // cy.get('[name="first_name"]').type('Test');
            // cy.get('[name="last_name"]').type('Master');
            // cy.get('[name="email"]').type('ia.hilfy+837@gmail.com');
            // cy.get('[name="password"]').type('12345678',{force:true});
            // cy.get('[name="repeatPassword"]').type('12345678',{force:true});
            // cy.get('[name="service_uuids"]').eq(1).click();
            // cy.get('[name="language_uuids"]').eq(1).click();
            // cy.get('[class="button button_medium button_foz14 ml_8"]').click();

        })
    })
})

function findCurrentDate(){
    const date = new Date();
    let currentDate = date.getDate()
    return cy.get('[class="ant-picker-cell-inner"]').contains(currentDate)
}