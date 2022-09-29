class sauceDemoPO {
    get mainQueryInput() {
        return cy.get('input[name="user-name"]');
    }
    get passwordQuery() {
        return cy.get('input[name="password"]');
    }
    get submitButton() {
        return cy.get('#login-button');
    }
    get basket() {
        return cy.get('#shopping_cart_container');
    }
    get checkout() {
        return cy.get('#checkout');
    }
    get finish() {
        return cy.get('#finish');
    }
    get home() {
        return cy.get('#back-to-products');
    }
    get firstBackpack() {
        return cy.get('#add-to-cart-sauce-labs-backpack');
    }
    get secondBackpack() {
        return cy.get('#add-to-cart-sauce-labs-bike-light');
    }
    get firstName() {
        return cy.get('input[name="firstName"]')
    }
    get lastName() {
        return cy.get('input[name="lastName"]')
    }
    get zipCode() {
        return cy.get('input[name="postalCode"]')
    }
    get continueToPay() {
        return cy.get('#continue')
    }



    setUserName() {
        this.mainQueryInput.type('standard_user');
    }
    setUserPassword() {
        this.passwordQuery.type('secret_sauce');
    }
    login() {
        this.submitButton.click();
    }
    clickOnBasket() {
        this.basket.click();
    }
    checkout1() {
        this.checkout.click();
    }
    finish1() {
        this.finish.click();
    }
    returnHome() {
        this.home.click();
    }
    addFirstBackpack() {
        this.firstBackpack.click();
    }
    addSecondBackpack() {
        this.secondBackpack.click();
    }
    userFirstName() {
        this.firstName.type('Wojciech');
    }
    userLastName() {
        this.lastName.type('Cejrowski');
    }
    postalCode() {
        this.zipCode.type(12345);
    }
    pay() {
        this.continueToPay.click();
    }

    verifyURL() {
        cy.url().should('include', '/inventory.html')
    }
    verifyText() {
        cy.get('#item_4_title_link').contains('Sauce Labs Backpack')
        cy.get('#item_0_title_link').contains('Sauce Labs Bike Light')
        cy.get('#item_2_title_link').contains('Sauce Labs Onesie')
    }
}

export default new sauceDemoPO();