class itera {
    navigate() {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
    }
    setName(value) {
        cy.get('#name')
        .clear()
        .type(value)
    }
    setPhoneNumber(value) {
        cy.get('#phone')
        .clear()
        .type(value)
    }
    setEmail(value) {
        cy.get('#email') 
        .clear()
        .type(value)
    }
    userPassword(value) {
        cy.get('#password')
        .clear()
        .type(value)
    }
    setAddress(value) {
        cy.get('#address')
        .clear()
        .type(value)
    }
    submit() {
       cy.get('[name="submit"]').click()
    }
    gender() {
       cy.get('#male').click()
    }
    days() {
       cy.get('#thursday').click()
    }
    country() {
      cy.get('.custom-select')
      .select('Spain')
    }
    experience() {
        cy.xpath("//label[@for= '2years']").click()
    }
    framework() {
        cy.xpath("//label[@for= 'testng']").click()
       
}
}
export default new itera();