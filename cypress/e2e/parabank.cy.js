describe("Parabank", () => {
  const name = "Wojciech";
  const address = "Kwiatowa 43";
  const city = "Warszawa";
  const state = "Mazowieckie";
  const zipCode = "12345";
  const phone = "123 456 789";
  const userName = "wojciacho";
  const password = "wojciacho";
  const accNumber = "1111 1111 1111 0000";
  const amount = "500";
  const updatedLastName = makeRandomString(5);

  it("Should login into parabank", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    //login into parabank
    cy.get("input[name='username']").clear().type(userName);
    cy.get("input[name='password']").clear().type(password);
    cy.get("input[value='Log In']").click();
    cy.wait(1000);
    //assert
    cy.get(".ng-binding").contains("$1000.00");

    //should click on bill pay and fill payee details
    cy.wait(1000);
    cy.get("#leftPanel").contains("Bill Pay").click();
    //assert
    cy.url().should(
      "include",
      "https://parabank.parasoft.com/parabank/billpay.htm"
    );
    //fill payee details
    cy.get("input[name='payee.name']").clear().type(name);
    cy.get("input[name='payee.address.street']").clear().type(address);
    cy.get("input[name='payee.address.city']").clear().type(city);
    cy.get("input[name='payee.address.state']").clear().type(state);
    cy.get("input[name='payee.address.zipCode']").clear().type(zipCode);
    cy.get("input[name='payee.phoneNumber']").clear().type(phone);
    cy.get("input[name='payee.accountNumber']").clear().type(accNumber);
    cy.get("input[name='verifyAccount']").clear().type(accNumber);
    cy.get("input[name='amount']").clear().type(amount);
    cy.get("select[name='fromAccountId']").contains("150318");
    cy.get("input[value='Send Payment']").click();
    cy.wait(1000);
    cy.get("#leftPanel").contains("Update Contact Info").click();
    cy.wait(1000);
  });
  it("Should update customer lastname", () => {
    cy.get("input[name='customer.lastName']").clear().type(updatedLastName);
    cy.get("input[value='Update Profile']").click();
    cy.wait(1000);
    //assert
    cy.get(".ng-scope >.title").contains("Profile Updated");
  });
  it("Should logout", () => {
    cy.get("#leftPanel").contains("Log Out").click();
    //assert
    cy.title().should("eq", "ParaBank | Welcome | Online Banking");
    cy.get("input[name='username']").should("be.visible");
    cy.get("input[name='password']").should("be.visible");
  });
});
function makeRandomString(length) {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
