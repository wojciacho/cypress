

it("Should navigate and click laptops", () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get(".list-group-item").contains("Laptop").click();
})
it("Should add macbook and visit cart", () => {
    cy.get(".card-title").contains("MacBook air").click();
    cy.get(".btn:visible").contains("Add to cart").click();
    cy.xpath("//a[text()='Cart']").click()
    cy.xpath("//button[text()='Place Order']").click()
})
it("Should type user details", () => {
    const name = "Wojciech";
    const country = "Poland";
    const city = "Warsaw";
    const card = "1234 1234 1234 1234";

    cy.get('#name').clear().type(name)
    cy.get('#country').clear().type(country)
    cy.get('#city').clear().type(city)
    cy.get('#card').clear().type(card)
    cy.get('#month').clear().type(day)
})
