/// <reference types="cypress" />

import blaze from "../pageobject/blazepageobject.cy."

describe('Blaze', () => {
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
        blaze.name('Wojciech')
        blaze.country('Poland')
        blaze.city('Warszawa')
        blaze.creditCard('123456')
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
    
        
    


