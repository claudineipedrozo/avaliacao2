import ColorPanel from ".";

describe("<ColorPanel />", () => {
    
    it("should render colorpanel correctly", () => {
        const red = 0;
        const green = 255;
        const blue = 255;
        const alpha = 1;
        //const backgroundColor = "rgba(0, 255, 255, 1)";  
        
        cy.mount(<ColorPanel red={red} green={green} blue={blue} alpha={alpha} />);

        cy.get('[data-cy="color-panel"]').should("have.css", "background-color");
        
    });
});


