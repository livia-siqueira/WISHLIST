describe("add and remove product in wishlist", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("add product in wishlist", () => {
    cy.get(":nth-child(1) > .sc-kLLXSd").click();
    cy.get(":nth-child(8) > .sc-kLLXSd").click();
    cy.get(":nth-child(12) > .sc-kLLXSd").click();

    cy.get(":nth-child(3) > .sc-dmRaPn").click();
  });

  it("remove product in wishlist", () => {
    cy.get(":nth-child(1) > .sc-kLLXSd").click();
    cy.get(":nth-child(8) > .sc-kLLXSd").click();
    cy.get(":nth-child(12) > .sc-kLLXSd").click();

    cy.get(":nth-child(3) > .sc-dmRaPn").click();

    cy.get(":nth-child(1) > .sc-hAZoDl").click();
    cy.get(":nth-child(2) > .sc-hAZoDl").click();
    cy.get(".sc-hAZoDl").click();

    cy.get(".sc-kDDrLX > :nth-child(1)").click();
  });
});
