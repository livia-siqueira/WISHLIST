describe("search product", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("search product in home", () => {
    cy.get(".sc-eKszNL").focus().clear().type("kit").blur();
    cy.get(".sc-eKszNL").focus().clear().type("Nike").blur();
    cy.get(".sc-eKszNL").focus().clear();
  });

  it("search product in wishlist", () => {
    cy.get(":nth-child(1) > .sc-hlnMnd").click();
    cy.get(":nth-child(5) >  .sc-hlnMnd").click();
    cy.get(":nth-child(6) >  .sc-hlnMnd").click();

    cy.get(":nth-child(3) > .sc-lbOyJj").click();
    cy.get(".sc-eKszNL").focus().clear().type("kit").blur();
    cy.get(".sc-eKszNL").focus().clear().type("Nike");
    cy.get(".sc-eKszNL").focus().clear();
  });
});
