class webProfilePage{
    visit(){
        cy.visit('https://web.stage.dopomo.com.ua/cabinet')
    }
    getProfile(){
        return cy.get('[class="menu__center"] [class="font-bold foz-14"]');
    }
    getAddillingAddress(){
        return cy.get('.billing-address') 
    }
    getGendorSelectorField(){
        return cy.get('.ant-select-selection-item')
    }
    getFirstNameField(){
        return cy.get('.form__item.mb-16 [name="first_name"]')
    }
    getSurnameField(){
        return cy.get('.form__item.mb-16 [name="last_name"]')
    }
    getStreetField(){
        return cy.get('.form__item.mb-16 [name="street"]')
    }
    getHouseNumberField(){
        return cy.get('.form__item.mb-16 [name="house"]')
    }
    getCountryField(){
        return cy.get('.form__item.mb-16 [name="country"]')
    }
    getCityField(){
        return cy.get('.form__item.mb-16 [name="city"]')
    }
    getPostCodeField(){
        return cy.get('.form__item.mb-16 [name="postcode"]')
    }
    getSaveButton(){
        return cy.get('.form-item .btn.btn_green.btn_h54')
    }
    getDeleteBillingButton(){
        return cy.get ('[viewBox="0 0 18 20"]')
    }
    getAddAddressButton(){
        return cy.get('[class="ellipsis btn btn_green btn_add-address"]')
    }
    typeAddress(){
        return cy.get('[class="form__input pac-target-input"]') 
    }
    pickAddress(){
        return cy.get('body > div.pac-container.pac-logo.hdpi > div:nth-child(1) > span.pac-item-query > span:nth-child(1)')
    }
    getFlatField(){
        return cy.get('[name="apartment"]') 
    }
    getCommentField(){
        return cy.get('[placeholder="Comment"]')
    }
    getSaveAddressButton(){
        return cy.get('.lib-modal .btn')
    }
    
    addBillingAddress(firstName, surName, street, houseNumber, country, city, zipCode){
        cy.log("Add billing address")
        this.getProfile().click()
        this.getAddillingAddress().click()
        this.getGendorSelectorField().click().first().click()
        this.getFirstNameField().type(firstName)
        this.getSurnameField().type(surName)
        this.getStreetField() .type(street)
        this.getHouseNumberField().type(houseNumber)
        this.getCountryField().type(country)
        this.getCityField().type(city)
        this.getPostCodeField().type(zipCode)
        this.getSaveButton().click()
        
    }
    addShortBillingAddress(shortFirstName, shortSurName, shortStreet, shortHouseNumber, shortCountry, shortCity, shortZipCode){
        cy.log("Add  short billing address")
        this.getProfile().click();
        this.getAddillingAddress().click();
        this.getGendorSelectorField().click().first().click();
        this.getFirstNameField().type(shortFirstName);
        this.getSurnameField().type(shortSurName);
        this.getAddressField().type(shortStreet);
        this.getHouseNumberField().type(shortHouseNumber);
        this.getCountryField().type(shortCountry);
        this.getCityField().type(shortCity);
        this.getPostCodeField().type(shortZipCode);
        this.getSaveButton().click();
        this.getDeleteBillingButton().click();
    }
    addShortBillingAddress(longFirstName, longSurName, longAddress, longHouseNumber, longCountry, longCity, longZipCode){
        cy.log("Add  long billing address")
        this.getProfile().click();
        this.getAddillingAddress().click();
        this.getGendorSelectorField().click().first().click();
        this.getFirstNameField().type(longFirstName);
        this.getSurnameField().type(longSurName);
        this.getAddressField().type(longAddress);
        this.getHouseNumberField().type(longHouseNumber);
        this.getCountryField().type(longCountry);
        this.getCityField().type(longCity);
        this.getPostCodeField().type(longZipCode);
        this.getSaveButton().click();
        this.getDeleteBillingButton().click();
    }
    addAddress(address, flat, comment){
        cy.log("Add address in profile");
        this.getProfile().click();
        this.getAddAddressButton().click();
        this.typeAddress().type(address);
        this.pickAddress().click();
        this.getFlatField().type(flat);
        this.getCommentField().type(comment);
        this.getSaveAddressButton().click();
    }
    addAddressAndBillingAddress(firstName, surName, street, houseNumber, country, city, zipCode,address, flat, comment){
        cy.log("Add billing address and address")
        this.getProfile().click()
        this.getAddillingAddress().click()
        this.getGendorSelectorField().click().first().click()
        this.getFirstNameField().type(firstName)
        this.getSurnameField().type(surName)
        this.getStreetField() .type(street)
        this.getHouseNumberField().type(houseNumber)
        this.getCountryField().type(country)
        this.getCityField().type(city)
        this.getPostCodeField().type(zipCode)
        this.getSaveButton().click()
        this.getAddAddressButton().click();
        this.typeAddress().type(address);
        this.pickAddress().click();
        this.getFlatField().type(flat);
        this.getCommentField().type(comment);
        this.getSaveAddressButton().click();
    }
} export default new webProfilePage


    