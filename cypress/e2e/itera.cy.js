/// <reference types="cypress" />

import itera from "../pageobject/iterapageobject.cy"
describe('Itera', () => {
    it("Should navigate, type name, etc and submit", () => {
        itera.navigate()
        itera.setName('Wojciech')
        itera.setPhoneNumber('123456789')
        itera.setEmail('123@test.pl')
        itera.userPassword('wojciacho')
        itera.setAddress('Chicago, Sloneczna 13')
        itera.submit()
    })
    it("Should pick gender, days, country, expierience", () => {
        itera.gender()
        itera.days()
        itera.country()
        itera.experience()
        itera.framework()
    })
})