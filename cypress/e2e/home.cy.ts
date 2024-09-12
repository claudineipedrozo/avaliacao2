describe("e2e tests RGBA panel", () => {   

    it("should display the correct color for a valid RGBA value", () => {

      cy.visit("");

      cy.get('#red-input').invoke('val', 0);      
      cy.get("#green-input").invoke('val', 255);
      cy.get("#blue-input").invoke('val', 255);
      cy.get("#alpha-input").invoke('val', 1);

      cy.get('[data-cy="color-panel"]').should('have.css', 'background-color');
    });  
});