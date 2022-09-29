class AlertPage {
    get btnAlert1() {
        return cy.get("#alert");
    }
    
    get btnAlert2() {
        return cy.get("#alert-confirm");
    }

    clickOnBtnAlert() {
        this.btnAlert1.click();
    }

    clickOnBtnAlert2() {
        this.btnAlert2.click();
    }

    verifyAlertText(tekst) {
        cy.on("window:alert", tresc => {
            expect(tresc).to.eql(tekst)
        })
    }
    
    verifyAlertConfirmText() {
        cy.on("window:confirm", tresc => {
            expect(tresc).to.eql("Zaakceptuj aby kontynuować!")
        })
    }

    rejectAlert() {
        cy.on("window:confirm", () => false)
    }
}

export default new AlertPage();