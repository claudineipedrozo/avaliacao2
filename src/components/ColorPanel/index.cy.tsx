import ColorPanel from ".";

describe("<ColorPanel />", () => {
    
    it("should render colorpanel correctly", () => {
        const red = 0;
        const green = 0;
        const blue = 75;
        const alpha = 1;
                        
        cy.mount(<ColorPanel red={red} green={green} blue={blue} alpha={alpha} />);

        cy.get('[data-cy="color-panel"]').should("be.visible").should("have.css", "background-color");
        
    });
});


