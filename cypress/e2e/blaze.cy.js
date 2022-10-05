/// <reference types="cypress" />

import blaze from "../pageobject/blazepageobject.cy."

describe('Blaze', () => {
    const username = makeRandomString(4);
    const creditCard = "0000 0000 0000 0000";
    it("Should click laptops", () => {
        blaze.navigate()
        blaze.laptops()
    })
    it("Should add macbook to cart and confirm alert", () => {
        blaze.macbook()
        blaze.addToCart()
        
        //blaze.alert()
    })
    it("assert", () => {
        blaze.alertText('Product added')
    })
    it("Assert MacBook", () => {
        blaze.assertURL()
        blaze.assertName()
        blaze.assertPrice()
        //blaze.verifyAlertText()
    })
    it("Should click cart, order and fill contact details", () => {
        blaze.cart()
        blaze.order()
        blaze.name(username)
        blaze.country('Poland')
        blaze.city('Warszawa')
        blaze.creditCard(creditCard)
        blaze.month('06')
        blaze.year('2022')
        blaze.purchase()
        blaze.sweetAlert()
        blaze.buttonOk()
        blaze.clickX()
        blaze.nava()
    })
    it("Should assert base url and title", () => {
        blaze.assertBaseURL()
        blaze.assertTitle()
    })     
    })

    function makeRandomString(length) {
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }
    
    //cy.get(".card-title").contains("Sony vaio i7").click();
    


