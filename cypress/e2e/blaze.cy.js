/// <reference types="cypress" />

import blaze from "../pageobject/blazepageobject.cy."

describe('Blaze', () => {
    const username = generateRandomString(6);
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
        blaze.buttonOk()
        blaze.clickX()
        blaze.nava()
    })
    it("Should assert base url and title", () => {
        blaze.assertBaseURL()
        blaze.assertTitle()
    })     
    })

    function generateRandomString(){
        let text = "";
        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for(let i = 0; i < 10; i++){
            text += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
        }
        return text;
    }
    
    //cy.get(".card-title").contains("Sony vaio i7").click();
    


