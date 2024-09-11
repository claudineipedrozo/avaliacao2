describe("e2e tests over home page", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("should render color correctly", function () {
    

    cy.get('[data-cy="color-panel"]').should("have.css", "background-color");

    const color = cy.get('[data-cy="color-panel"]');
    color.should("have.css", "background-color", color)
    
  })

  });