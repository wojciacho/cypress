describe("Global sqa", () => {
    it("Customer test", () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        cy.get('.ng-scope').contains('Customer Login').click()

        cy.url().should('include', '/customer')
        cy.get('#userSelect').select('Harry Potter')
        cy.get('#userSelect').should('contain', 'Harry Potter')

        cy.get('button[type="submit"]').should('be.visible')
        cy.get('button[type="submit"]').click()

        cy.get('#accountSelect').select('1005')
        cy.get('.ng-binding').should('contain', 'Pound')
        cy.get('.ng-scope').contains('Deposit').click()
        cy.get('input[type="number"]').type('500')
        cy.get('input[type="number"]').should('have.value', '500')
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('contain', 'Deposit Successful')
        cy.get('.error').should('have.css', 'color', 'rgb(255, 0, 0)')

        cy.get('.ng-binding').should('contain', '500')
        cy.get('.ng-scope').contains('Withdrawl').click()
        cy.wait(1000)
        cy.get('input[placeholder="amount"]').type('250')
        cy.get('input[placeholder="amount"]').should('have.value', '250')
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('contain', 'Transaction successful')
        cy.get('.error').should('have.css', 'color', 'rgb(255, 0, 0)')

        cy.get('.ng-scope').contains('Transactions').click()

        cy.get('#anchor0').should('contain', '500')
        cy.get('#anchor1').should('contain', '250')

        cy.get('button[class="btn"]').eq(1).click()
        cy.url().should('include', '/BankingProject/#/listTx')

        cy.get('button[ng-show="logout"]').click()
        cy.get('button[ng-click="home()"]').click()

        cy.url().should('include', '/BankingProject/#/login')
    })
})