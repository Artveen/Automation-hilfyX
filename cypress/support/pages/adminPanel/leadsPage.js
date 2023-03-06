class LeadsPage{
    visit(){
        cy.visit('https://admin.stage.dopomo.com.ua/auth/login');
    }
    openScoringPage(){
        return cy.get('.style_nav__menuLink__Zqjge[href="/admin/leads"]')
    }
    openLead(){
        return cy.get('[class="style_listItem__element_w5__m1BwJ"]').eq(0)
    }
}export default new LeadsPage();