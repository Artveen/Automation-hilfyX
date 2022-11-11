class clientsPage{
    visit(){
        cy.visit('https://admin.stage.dopomo.com.ua/auth/login');
    }
    getLoginField(){
        return cy.get('[id="email"]')
    }
    
    getPasswordField(){
        return cy.get('[name="password"]')
    }
    
    getSubmitButton(){
        return cy.get('button[class="button button_medium"]')
    }
    
    submitLoginForm(email, password){
        cy.log("Fill and submit login form")
        
        this.getLoginField().type(email);
        this.getPasswordField().type(password);
        this.getSubmitButton().click();
    }
    openClientPage(){
        return cy.get('.style_nav__menuLink__Zqjge[href="/admin/clients"]');
    }
    openBalanceWindow(lineNumber){
        return cy.get('[data-icon="plus-circle"]').eq(2)
     }
    findBalanceField(){
        return cy.get('[class="ant-input-number-input"]')
    }
    submitBalance(){
        return cy.get('[class="button button_medium button_foz14 ml_8"]')
    }
    submitClientBalance(){
        cy.log("Find fill and submit client balance")
        this.openClientPage().click();
        this.openBalanceWindow().click();
        this.findBalanceField().type(200);
        this.submitBalance().click()
    }
} export default new clientsPage();