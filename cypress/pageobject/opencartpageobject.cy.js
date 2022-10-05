class opencart {
    navigate() {
        cy.visit('https://demo.opencart.com/index.php?route=common/home&language=en-gb')
    }
    clickTablets() {
        cy.xpath("//a[text()='Tablets']").click()
    }
    wishListButton() {
        cy.get('[data-bs-original-title="Add to Wish List"]').click()
    }
    clickAddToCart() {
        cy.get('[data-bs-original-title="Add to Cart"]').click()
    }
    clickPhones() {
        cy.xpath("//a[@href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=24']").eq(1).click()
    }
    clickCompareIPHONE() {
        cy.get('[data-bs-original-title="Compare this Product"]').eq(1).click()
    }
    home() {
        cy.get('#logo').click()
    }

    url() {
        cy.url().should('include', 'https://demo.opencart.com/index.php?route=common/home&language=en-gb')
    }
    alert() {
        cy.get('#alert', { timeout: 10000 }).should('be.visible');
    }
    searchbar() {
        cy.get('[name="search"]').should('be.visible')
    }
}
export default new opencart();