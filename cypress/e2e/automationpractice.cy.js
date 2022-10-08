describe("Automation practice", () => {
    //const email = makeEmail()
    const email2 = 'wojciacho@wojciacho.at'
    // const firstName = 'Wojciech'
    // const lastName = 'Wojciechowski'
    const password = 'Wojciacho123!'
    // const address = 'Sloneczna 13'
    // const city = 'New York'
    // const code = '12345'
    // const mobile = '123 456 789'
    // const alias = 'wojciacho@ciacho.at'

    it("Adding dress to cart and order it", () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.xpath("//a[@href='http://automationpractice.com/index.php?id_category=11&controller=category']").eq(1).click({force:true})
        cy.get('.button-container > .button').eq(5).click()
        //assert
        cy.url().should('include', '/index.php?id_product=6&controller=product')
        cy.get('#group_1').select('M')
        cy.get('#color_8').click()
        //assert
        cy.url().should('include', 'index.php?id_product=6&controller=product#/size-m/color-white')
        cy.get('#our_price_display').should('contain', '$30.50')
        //cart
        cy.get('#add_to_cart').click()
        //assert
        cy.get('.layer_cart_row').should('contain', '$32.50')
        cy.get('h2').should('contain', 'Product successfully added to your shopping cart')
        //checkout
        cy.get('.button-medium').click()
        //assert
        cy.get('#total_price').should('contain', '$32.50')
        //checkout
        cy.get('.standard-checkout').click()
        //login
        cy.get('#email').type(email2)
        cy.get('#passwd').type(password)
        cy.get('#SubmitLogin').click()
        //cart
        cy.get('.shopping_cart').click()
        cy.get('button[name="processAddress"]').click()
        //shipping
        cy.get('#uniform-cgv').click()
        cy.get('button[name="processCarrier"]').click()
        //check
        cy.get('.cheque').click()
        //confirm
        cy.get('.button-medium').eq(1).click()
        //assert
        cy.get('.alert').should('contain', 'Your order on My Store is complete.')
        //home
        cy.get('#header_logo').click()
        //assert url
        cy.url().should('include', 'http://automationpractice.com/index.php') 
        //assert title
        cy.title().should('eq', 'My Store')
    })
})

function makeEmail() {
    var strValues = "abcdefg12345";
    var strEmail = "";
    var strTmp;
    for (var i = 0; i < 10; i++) {
        strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
        strEmail = strEmail + strTmp;
    }
    strTmp = "";
    strEmail = strEmail + "@";
    for (var j = 0; j < 8; j++) {
        strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
        strEmail = strEmail + strTmp;
    }
    strEmail = strEmail + ".com"
    return strEmail;
  }



  // //create an account
        // cy.get('#email_create').type(email2)
        // cy.get('#SubmitCreate').click()
        // //personal information
        // cy.get('#uniform-id_gender1').click()
        // cy.get('#customer_firstname').type(firstName)
        // cy.get('#customer_lastname').type(lastName)
        // cy.get('#passwd').type(password)
        // cy.get('#days').select('6')
        // cy.get('#months').select('6')
        // cy.get('#years').select('2000')
        // //address
        // cy.get('#address1').type(address)
        // cy.get('#city').type(city)
        // cy.get('#id_state').select('Hawaii')
        // //assert
        // cy.get('#id_state').should('contain', 'Hawaii')
        // //address
        // cy.get('#postcode').type(code)
        // cy.get('#id_country').select('United States')
        // cy.get('#phone_mobile').type(mobile)
        // cy.get('#alias').clear().type(alias)
        // cy.get('#submitAccount').click()

        //process
        //cy.get('.standard-checkout').click()