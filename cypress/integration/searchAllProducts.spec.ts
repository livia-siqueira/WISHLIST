describe("search product", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("search product in home", () => {
    cy.get("[data-test=inputSearch]").focus().clear().type("kit").blur();
    cy.get("[data-test=inputSearch]").focus().clear().type("Nike").blur();
    cy.get("[data-test=inputSearch]").focus().clear();
  });

  it("search product in wishlist", () => {
    cy.get("[data-test=1]").click();
    cy.get("[data-test=2]").click();
    cy.get("[data-test=3]").click();

    cy.get("[data-test=wishlist]").click();
    cy.get("[data-test=inputSearch]").focus().clear().type("kit").blur();
    cy.get("[data-test=inputSearch]").focus().clear().type("Nike");
    cy.get("[data-test=inputSearch]").focus().clear();
  });
});
