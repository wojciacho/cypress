describe("Global sqa", () => {
    it("Bank Manager Login", () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')

        cy.get('.ng-scope').contains('Bank Manager Login').click()
        cy.url().should('include', '/manager')

        cy.get('button[ng-click="addCust()"]').click()

        cy.get('input[ng-model="fName"]').type('Chuck')
        cy.get('input[ng-model="lName"]').type('Norris')
        cy.get('input[ng-model="postCd"]').type('12345')
        cy.get('button[type="submit"]').click()

        cy.get('.center').contains('Customers').click()
        cy.get('.table').should('contain', 'Chuck', 'Norris', '12345')

        cy.get('.center').contains('Open Account').click()
        cy.get('#userSelect').select('Chuck Norris')
        cy.get('#currency').select('Dollar')
        cy.get('button[type="submit"]').click()

        cy.get('.center').contains('Customers').click()
        cy.get('.table').should('contain', '1016')

        cy.get('input[type="text"]').type('chuck')
        cy.get('.table').should('contain', 'Chuck', 'Norris', '12345')

        cy.get('button[ng-click="home()"]').click()
        cy.url().should('include', '/BankingProject/#/login')
        cy.get('.ng-scope').contains('Customer Login').click()
        cy.url().should('include', '/customer')
        cy.get('#userSelect').select('Chuck Norris')
        cy.get('#userSelect').should('contain', 'Chuck Norris')

        cy.get('button[type="submit"]').should('be.visible')
        cy.get('button[type="submit"]').click()

        cy.get('.ng-scope').contains('Deposit').click()
        cy.get('input[type="number"]').type('2000')
        cy.get('input[type="number"]').should('have.value', '2000')
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('contain', 'Deposit Successful')
        cy.get('.error').should('have.css', 'color', 'rgb(255, 0, 0)')

        cy.get('.ng-binding').should('contain', '2000')
        cy.get('.ng-scope').contains('Withdrawl').click()
        cy.wait(1000)
        cy.get('input[placeholder="amount"]').type('750')
        cy.get('input[placeholder="amount"]').should('have.value', '750')
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('contain', 'Transaction successful')
        cy.get('.error').should('have.css', 'color', 'rgb(255, 0, 0)')

        cy.get('.ng-scope').contains('Transactions').click()

        cy.get('#anchor0').should('contain', '2000')
        cy.get('#anchor1').should('contain', '750')

        cy.get('button[class="btn"]').eq(1).click()
        cy.url().should('include', '/BankingProject/#/listTx')

        cy.get('button[ng-show="logout"]').click()
        cy.get('button[ng-click="home()"]').click()

        cy.url().should('include', '/BankingProject/#/login')
    })
})