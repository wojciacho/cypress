class healthCarePO {
    get appointment() {
        return cy.get('#btn-make-appointment');
    }
    get mainQueryInput() {
        return cy.get('input[name="username"]')
    }
    get passwordQuery() {
        return cy.get('input[name="password"]');
    }
    get btnLogin() {
        return cy.get('#btn-login');
    }
    get checkboxReadMission() {
        return cy.get('#chk_hospotal_readmission');
    }
    get date() {
        return cy.get('#txt_visit_date');
    }
    get comment() {
        return cy.get('#txt_comment');
    }
    get send() {
        return cy.get('#btn-book-appointment');
    }
    get return() {
        return cy.get('.btn.btn-default');
    }
    get select1() {
        return cy.get('#combo_facility');
    }
    get option() {
        return cy.get('option[value="Hongkong CURA Healthcare Center"]')
    }
    get program() {
        return cy.get('[name="programs"]').check('Medicaid')
    }
    get opcje() {
        return cy.get('#combo_facility').select('Hongkong CURA Healthcare Center')
    }

    signIn() {
        this.appointment.click();
    }
    setInvalidUserID() {
        this.mainQueryInput.type('admin');
    }
    setInvalidUserPassword() {
        this.passwordQuery.type('admin');
    }
    setUserID() {
        this.mainQueryInput.type('John Doe');
    }
    setUserPassword() {
        this.passwordQuery.type('ThisIsNotAPassword');
    }
    clearLoginInput() {
        this.mainQueryInput.clear();
        this.passwordQuery.clear();
    }
    btnLogin1() {
        this.btnLogin.click();
    }
    clickCheckbox() {
        this.checkboxReadMission.click();
    }
    selectProgram() {
        this.program.click();
    }
    setDate() {
        this.date.type('06/06/2000')
    }
    setComment() {
        this.comment.type('Pozdrawiam serdecznie', {force: true})
    }
    sendAppointment() {
        this.send.click();
    }
    return1() {
        this.return.click();
    }



    verifyURL() {
        cy.url().should('include', 'https://katalon-demo-cura.herokuapp.com')
    }
    verifyTitle() {
        cy.title().should('eq', 'CURA Healthcare Service')
    }
}

export default new healthCarePO();