describe("add and remove product in wishlist", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("add product in wishlist", () => {
    cy.get("[data-test=1]").click();
    cy.get("[data-test=2]").click();
    cy.get("[data-test=3]").click();

    cy.get("[data-test=wishlist]").click();
  });

  it("remove product in wishlist", () => {
    cy.get("[data-test=1]").click();
    cy.get("[data-test=2]").click();
    cy.get("[data-test=3]").click();

    cy.get("[data-test=wishlist]").click();

    cy.get("[data-test=1]").click();
    cy.get("[data-test=2]").click();
    cy.get("[data-test=3]").click();
  });
});
