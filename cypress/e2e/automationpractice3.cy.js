describe("Automation practice", () => {
        const email2 = 'wojciacho@wojciacho.at'
        const password = 'Wojciacho123!'
    it("Should assert different things and should purchase dress", () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.clearCookies()
        //tshirts
        cy.get('#block_top_menu').contains("T-shirts").click({force: true})
        cy.get('input[value="1_1"]').click()
        cy.get('#layered_id_attribute_group_14').click()
        //assert
        cy.get('.ajax_block_product').should('contain', 'Faded Short Sleeve T-shirts')
        cy.get('input[value="1_1"]').should('be.checked')
        cy.get('#layered_id_attribute_group_14').should('have.css', 'border', '1px solid rgb(102, 102, 102)')
        cy.get('#search_query_top').should('be.visible')
        //casual dresses
        cy.get('#block_top_menu').contains("Casual Dresses").click({force: true})
        //assert
        cy.url().should('include', '/index.php?id_category=9&controller=category')
        cy.get('.product-name').should('contain', 'Printed Dress')
        cy.get('.content_price').should('contain', '$26.00')
        cy.get('#newsletter-input').should('be.visible')
        //blouses
        cy.get('#block_top_menu').contains("Blouses").click({force: true})
        cy.title().should('eq', 'Blouses - My Store')
        cy.get('.ajax_add_to_cart_button').click()
        cy.get('h2').should('contain', 'Product successfully added to your shopping cart')
        cy.wait(2000)
        cy.get('.cross').click()
        cy.get('#block_contact_infos').click()
        cy.get('.toggle-footer').should('contain', 'Selenium Framework')
        //searchbar
        cy.get('#search_query_top').type("dress")
        cy.get('.button-search').click()
        
        cy.url().should('include', 'search_query=dress&submit_search=')
        cy.get('.heading-counter').should('contain', '7 results have been found.')
        //add to cart
        cy.get('.ajax_add_to_cart_button').eq(0).click()
        //assert
        cy.get('.ajax_block_cart_total').should('contain', '$57.98')

        cy.get('.button-medium').eq(0).click()
        cy.get('.standard-checkout').click()
        cy.get('#email').type(email2)
        cy.get('#passwd').type(password)
        cy.get('#SubmitLogin').click()
        cy.get('button[name="processAddress"]').click()
        cy.get('#uniform-cgv').click()
        cy.get('button[name="processCarrier"]').click()
        cy.get('.cheque').click()
        cy.get('.button-medium').eq(1).click()
        //assert
        cy.get('.alert').should('contain', 'Your order on My Store is complete.')
        cy.get('.box.order-confirmation').should('contain', 'Payment amount. $57.98')
        cy.get('#header_logo').click()
        //assert url
        cy.url().should('include', 'http://automationpractice.com/index.php') 
        //assert title
        cy.title().should('eq', 'My Store')
    })
})