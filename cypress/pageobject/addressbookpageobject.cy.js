class addressbookPO {
    navigate() {
        cy.visit('http://a.testaddressbook.com')
     }
    signIn() {
        cy.get('#sign-in').click()
    }
    email(email) {
        cy.get('input[type="email"]')
        .clear()
        .type(email)
    }
    password(password) {
        cy.get('input[type="password"]')
        .clear()
        .type(password)
    }
    logIn() {
        cy.get('input[type="submit"]').click()
    }
    signUp() {
        cy.get('a[data-test="sign-up"]').click()
    }
    address() {
        cy.get('a[data-test="addresses"]').click()
    }
    createAddress() {
        cy.get('a[data-test="create"]').click()
    }
    firstName(name) {
        cy.get('input[name="address[first_name]"]')
        .clear()
        .type(name)
    }
    lastName(lastName) {
        cy.get('input[name="address[last_name]"]')
        .clear()
        .type(lastName)
    }
    address1(address) {
        cy.get('input[name="address[address1]"]')
        .clear()
        .type(address)
    }
    city(city) {
        cy.get('input[name="address[city]"]')
        .clear()
        .type(city)
    }
    clickState() {
        cy.get('[name="address[state]"]')
        .select('Nevada')
    }
    zipCode(code) {
        cy.get('[name="address[zip_code]"]')
        .clear()
        .type(code)
    }
    country() {
        cy.get('#address_country_canada').click()
    }
    age(age) {
        cy.get('input[type="number"]')
        .clear()
        .type(age)
    }
    webPage(page) {
        cy.get('input[type="url"]')
        .clear()
        .type(page)
    }
    phoneNumber(number) {
        cy.get('input[type="tel"]')
        .clear()
        .type(number)
    }
    hobby() {
        cy.get('#address_interest_dance').click()
    }
    note (note) {
        cy.get('#address_note')
        .clear()
        .type(note)
    }
    send() {
        cy.get('input[type="submit"]').click()
    }
    
    
    
    


    verifyURL() {
        cy.url().should('include', '/sign_in')
    }
    verify() {
        cy.get('#address_state').should('have.value', 'NV')
    }
    verifyCanada() {
        cy.get('#address_country_canada').check().should('be.checked')
    }
    verifyDancing() {
        cy.get('#address_interest_dance').should('be.checked')
    }


}
export default new addressbookPO();
