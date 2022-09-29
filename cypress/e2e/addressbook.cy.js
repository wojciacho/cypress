/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });
import addressbookPO from "../pageobject/addressbookpageobject.cy"
describe('Adressbook', () => {
    it("Should login", () => {
        addressbookPO.navigate()
        addressbookPO.signIn()
        addressbookPO.email('123@123.com')
        addressbookPO.password('123')
        addressbookPO.logIn()
        addressbookPO.address()
    })
    it("Should click and fill address", () => {
        addressbookPO.createAddress()
        addressbookPO.firstName('Wojciech')
        addressbookPO.lastName('Wojciechowski')
        addressbookPO.address1('Sloneczna 13')
        addressbookPO.city('Chicago')
        addressbookPO.clickState()
        addressbookPO.zipCode('12345')
        addressbookPO.country()
        addressbookPO.age('22')
    })
        it('Verify state', () => {
            addressbookPO.verify();
        })
        it('Country verify', () => {
            addressbookPO.verifyCanada()
        })
        it('Should type page, number and check hobby', () => {
            addressbookPO.webPage('https://www.google.com')
            addressbookPO.phoneNumber('123456789')
            addressbookPO.hobby()
        })
        it('Dancing verify', () => {
            addressbookPO.verifyDancing()
        })
        it('Should type and send note', () => {
            addressbookPO.note('Witam')
            addressbookPO.send()  
        })
        it('Url assert', () => {
            addressbookPO.verifyURL();
        })

    })
    

    
