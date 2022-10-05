class blaze {
    navigate() {
        cy.visit('https://www.demoblaze.com/')
    }
    laptops() {
        cy.get(".list-group-item").contains("Laptop").click();
    }
    macbook() {
        cy.get(".card-title").contains("MacBook air").click();
    }
    addToCart() {
        cy.get(".btn:visible").contains("Add to cart").click();
    }

    cart() {
        cy.xpath("//a[text()='Cart']").click()
    }
    order() {
        cy.get(".btn:visible").contains("Place Order").click()
    }
    name(name) {
        cy.get('#name')
        .clear()
        .type(name)
    }
    country(country) {
        cy.get('#country')
        .clear()
        .type(country)
    }
    city(city) {
        cy.get('#city')
        .clear()
        .type(city)
    }
    creditCard(card) {
        cy.get('#card')
        .clear()
        .type(card)
    }
    month(day) {
        cy.get('#month')
        .clear()
        .type(day)
    }
    year(year) {
        cy.get('#year')
        .clear()
        .type(year)
    }
    purchase() {
        cy.xpath("//button[text()='Purchase']").click()
    }
    buttonOk() {
        cy.get(".sa-confirm-button-container").click()
    }
    clickX() {
        cy.get(".close").eq(2).click()
    }
    nava() {
        cy.get('#nava').click()
    }



    assertURL() {
        cy.url().should('include', 'https://www.demoblaze.com/prod.html?idp_=11')
    }
    assertTitle() {
        cy.title().should('eq', 'STORE')
    }
    assertName() {
        cy.get('.name').contains('MacBook air')
    }
    assertPrice() {
        cy.get('.price-container').contains('$700')
    }
    sweetAlert() {
        cy.get('.sweet-alert').should('be.visible')
    }
    assertBaseURL() {
        cy.url().should('include', 'https://www.demoblaze.com/index.html')
    }
    alertText() {
        cy.on('window:alert', (msg) => {
            expect(msg).to.contains(str);
        })
    }
    
}

export default new blaze();