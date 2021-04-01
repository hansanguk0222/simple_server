describe("Knowledge Base Application", () => {
  it("가장 기초적인 /에서 받아오기", () => {
    cy.visit("/");
    cy.get("h1").should("have.text", "Hello");
    // cy.get("h1").should("have.text", "Hello2");
  });
});
