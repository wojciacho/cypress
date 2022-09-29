/// <reference types="cypress" />

import sauceDemoPO from "../pageobject/saucedemopageobject.cy"

describe("Login and buy two backpacks", () => {
    it('Should buy 2 backpacks', () => {
        cy.visit('https://www.saucedemo.com')
    
    sauceDemoPO.setUserName();
    sauceDemoPO.setUserPassword();
    sauceDemoPO.login();
    sauceDemoPO.addFirstBackpack();
    sauceDemoPO.addSecondBackpack();
    sauceDemoPO.clickOnBasket();
    sauceDemoPO.checkout1();
    sauceDemoPO.userFirstName();
    sauceDemoPO.userLastName();
    sauceDemoPO.postalCode();
    sauceDemoPO.pay();
    sauceDemoPO.finish1();
    sauceDemoPO.returnHome();
})

    it('Url assert', () => {
        sauceDemoPO.verifyURL();
})
    it('Text assert', () => {
        sauceDemoPO.verifyText();
    })
})