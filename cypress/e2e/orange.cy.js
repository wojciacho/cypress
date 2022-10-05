/// <reference types="cypress" />

import orange from "../pageobject/orangepageobject.cy"
describe('Adressbook', () => {
    it("Should login", () => {
            orange.navigate()
            orange.userName("Admin")
            orange.password("admin123")
            orange.buttonSubmit()
            orange.clickAdmin()
            orange.inputName('Wojciech')
            orange.middleName(makeRandomString(5))
            orange.lastName('Cejrowski')
            orange.buttonSubmit()
            orange.contain()
            // orange.buzz()
            // orange.post("Witam serdecznie")
            // orange.submit()
            // orange.clickAdmin()

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
    })
})





