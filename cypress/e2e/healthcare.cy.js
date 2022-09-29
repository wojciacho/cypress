/// <reference types="cypress" />

import healthCarePO from "../pageobject/healthcarepageobject.cy"
describe('Healthcare', () => {
    it("Should login with invalid ID and password", () => {
        cy.visit('https://katalon-demo-cura.herokuapp.com')
        healthCarePO.signIn()
        healthCarePO.setInvalidUserID()
        healthCarePO.setInvalidUserPassword()
        healthCarePO.btnLogin1()
    })
    it("Should login with correct ID and password", () => {
        healthCarePO.clearLoginInput()
        healthCarePO.setUserID()
        healthCarePO.setUserPassword()
        healthCarePO.btnLogin1()
    })
    it("Should pick program, date and send appointment", () => {
        healthCarePO.clickCheckbox()
        healthCarePO.selectProgram()
        healthCarePO.setDate()
        healthCarePO.setComment()
        healthCarePO.sendAppointment()
        healthCarePO.return1()
    })
    it('Url assert', () => {
        healthCarePO.verifyURL();
})
    // it('Text assert', () => {
    //     healthCarePO.verifyText();
    // })
    it('Title assert', () => {
        healthCarePO.verifyTitle();
    })
})