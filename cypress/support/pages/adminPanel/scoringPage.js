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
        return cy.get('[class="style_listItem__downloadLink__sDHBz"]').eq(0)//частковий пошук
    }
    findCreateLeadElectrician(){
        return cy.get('[class^="button button_small"]').eq(1)
    }
    findDatePicker(){
        return cy.get('[class="ant-picker-input"] input') .eq(0)
    }
    findCurrentDate(){
        const date = new Date();
        let currentDate = date.getDate()+1
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
    this.findCreateLeadButton().first().click({force:true});
    this.findCreateLeadElectrician().click();
    this.findDatePicker().click()
    this.findCurrentDate().click();
    cy.wait(1000)
    // this.findPickServiceField().click({force:true})
    //     cy.get('[class="ant-select-item ant-select-item-option"]') .first().click();
    this.findSubmitButton().click();
    }
} export default new scoringPage();