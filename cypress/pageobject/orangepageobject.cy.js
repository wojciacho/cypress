class orange {
    navigate() {
        cy.visit('https://opensource-demo.orangehrmlive.com')
    }
    buttonSubmit() {
        cy.get('button[type="submit"]').click()
    }
    userName(name) {
        cy.get('input[name="username"]')
        .clear()
        .type(name)
    }
    password(password) {
        cy.get('input[name="password"]')
        .clear()
        .type(password)
    }
    clickAdmin() {
        cy.get('.orangehrm-header-container > button').click()
    }
    clickAddButton() {
        cy.get('#btnAdd').click()
    }
    inputName(name) {
        cy.get('input[name="firstName"]')
        .clear()
        .type(name)
    }
    middleName(name) {
        cy.get('input[name="middleName"]')
        .clear()
        .type(name)
    }
    lastName(name) {
        cy.get('input[name="lastName"')
        .clear()
        .type(name)
    }
    save() {
        cy.xpath('//div[text()="Save"]').click()
    }
    buzz() {
        cy.get('#menu_buzz_viewBuzz').click()
    }
    post(value) {
        cy.get('[name="createPost[content]"]')
        .clear()
        .type(value)
    }
    submit() {
        cy.get('#postSubmitBtn').click()
     }

    contain() {
        cy.get('.orangehrm-edit-employee-name').contains('Wojciech Cejrowski')
     }
}

export default new orange();