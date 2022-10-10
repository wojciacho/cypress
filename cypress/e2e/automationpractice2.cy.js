describe("Automation practice", () => {
    it("Should buy evening dress", () => {
        const email2 = 'wojciacho@wojciacho.at'
        const password = 'Wojciacho123!'

        cy.visit('http://automationpractice.com/index.php', {failOnStatusCode: false})
        cy.xpath('//a[@href="http://automationpractice.com/index.php?id_category=10&controller=category"]').eq(1).click({force:true})
        cy.get('#layered_id_attribute_group_2').click()
        //assert
        cy.get('#layered_id_attribute_group_2').should('be.checked')
        //color
        cy.get('.color-option').eq(1).click()
        cy.get('#layered_id_attribute_group_24').should('have.css', 'border', '1px solid rgb(102, 102, 102)')
        //click more
        cy.get('.lnk_view').eq(0).click()
        //quantity
        cy.get('#quantity_wanted').clear().type('5')
        //size
        cy.get('#group_1').select('L') 
        //color
        cy.get('#color_24').click()   
        //assert
        cy.url().should('include', '/size-l/color-pink')  
        //add to cart
        cy.get('button[name="Submit"]').should('have.class', 'exclusive')
        cy.get('#add_to_cart').click()
        //assert
        cy.wait(3000)
        cy.get('.ajax_block_products_total').should('contain', '$254.95')
        //checkout
        cy.get('.button-medium').click()
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
        cy.get('.box.order-confirmation').should('contain', 'Payment amount. $256.95')
        cy.get('#header_logo').click()
        //assert url
        cy.url().should('include', 'http://automationpractice.com/index.php') 
        //assert title
        cy.title().should('eq', 'My Store')

    })
    
})