/// <reference types="cypress" />

import opencart from "../pageobject/opencartpageobject.cy"

describe('Opencart', () => {
    it("Should click tablets", () => {
        opencart.navigate()
        opencart.clickTablets()
        opencart.wishListButton()
        opencart.clickAddToCart()
        opencart.clickPhones()
        opencart.clickCompareIPHONE()
        opencart.home()
        // cy.visit('https://demo.opencart.com/index.php?route=common/home&language=en-gb')
        // cy.xpath("//a[text()='Tablets']").click()
        // cy.xpath("//a[text()='Laptops & Notebooks (5)']").click()
        // cy.xpath("//a[@href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=18_45']").eq(2).click()
        // cy.xpath("//a[text()='   - Windows (0)']").eq(1).click()
    })
    it("Assert", () => {
        opencart.url()
        opencart.alert()
        opencart.searchbar()
        // cy.url().should('include', 'https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=18')
        // cy.get('#content').contains('There are no products to list in this category.')
    })
})
//cy.xpath("//a[text()='&nbsp;&nbsp;&nbsp;- Windows (0)']").click()