/// <reference types="cypress" />
import AlertPage from "../pageobject/alertPage.cy";

describe("alerty e2e", () => {
    it("alerty", () => {
        cy.visit('https://testowanie-oprogramowania.pl/lekcje/alerty/')
        AlertPage.clickOnBtnAlert();
        AlertPage.verifyAlertText("Przykładowa treść alertu");
    })

    it("alert confirm", () => {
        AlertPage.clickOnBtnAlert2();
        AlertPage.verifyAlertConfirmText();
        AlertPage.rejectAlert();
    })
})