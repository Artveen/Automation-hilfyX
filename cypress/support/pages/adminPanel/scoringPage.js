class scoringPage{
    visit(){
        cy.visit('https://admin.stage.dopomo.com.ua/auth/login');
    }
    openScoringPage(){
        return cy.get('.style_nav__menuLink__Zqjge[href="/admin/scoring"]')
    }
    openClient(){
        return cy.get('[class="c-p style_listItem__JIwWN"]').eq(0)
    }
    openPDF(){
        return cy.get('[alt="save pdf file"]').eq(2)
    }
    findCreateLeadButton(){
        return cy.get('[class^="style_listItem__element"]').eq(15)//частковий пошук 
    }
    findCreateLeadElectrician(){
        return cy.get('[class^="button button_small"]').eq(0)
    }
    findDatePicker(){
        return cy.get('[class="ant-picker-input"] input') .eq(0)
    }
    createCurrentDate(){
        const date = new Date();
        return date.getDate();
        }
    findCurrentDate(){
        let currentDate = this.createCurrentDate()
        return cy.get('[class="ant-picker-cell-inner"]').contains(currentDate)
    }
    // findPickServiceField(){
    //     return cy.get('[id="rc_select_2"]')
    // }
    findSubmitButton(){
        return cy.get('[type="submit"]')
    }
  
    checkClientScoring(){
    cy.log("Find client and check the scoring")
    this.openScoringPage().click();
    this.openClient().click();
    this.openPDF().click();
    }
    createLeadFromScoring(){
    cy.log("Create lead from scoring")
    this.openScoringPage().click();
    this.openClient().click();
    cy.wait(2000)
    this.findCreateLeadButton().first().click();
    this.findCreateLeadElectrician().click();
    this.findDatePicker().click()
    this.findCurrentDate().click();
    // this.findPickServiceField().click().first().click();
    this.findSubmitButton().click();
    }
} export default new scoringPage();