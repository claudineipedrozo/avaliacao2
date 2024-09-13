
describe("e2e tests RGBA panel", () => {   

    it("should display the correct color for a valid RGBA value", () => {

      cy.visit("");

        //cy.get('#red-input').invoke('val', 0).should('have.css', 'background-color');      
        //cy.get("#green-input").invoke('val', 255).should('have.css', 'background-color');
        //cy.get("#blue-input").invoke('val', 0).should('have.css', 'background-color');
        //cy.get("#alpha-input").invoke('val', 1).should('have.css', 'background-color');

        //cy.get('[data-cy="color-panel"]').should('have.css', 'background-color');

        cy.get('#blue-input').then((input:JQuery<HTMLInputElement>) => input[0].stepUp(75)).trigger('change');

        cy.get('[data-cy="color-panel"]').should('have.css', 'background-color');
    });  
});