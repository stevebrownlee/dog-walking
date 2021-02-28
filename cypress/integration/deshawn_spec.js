describe('Test lists of data', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/')
    })

    it('Verifies city list', () => {
        cy.get(".details__cities").children("ul").children().should("have.length", 10)
        cy.get(".details__cities").children("ul").children().first().should("have.text", "Chicago")
        cy.get(".details__cities").children("ul").children().last().should("have.text", "Pittsburgh")
    })

    it('Verifies walker list', () => {
        cy.get(".details__walkers").children("ul").children().should("have.length", 10)
        cy.get(".details__walkers").children("ul").children().first().should("have.text", "Alphonse Meron")
        cy.get(".details__walkers").children("ul").children().last().should("have.text", "Arv Biddle")
    })

    it('Verifies pet list', () => {
        cy.get(".details__pets").children("ul").children().should("have.length", 10)
        cy.get(".details__pets").children("ul").children().first().should("have.text", "Figs")
        cy.get(".details__pets").children("ul").children().last().should("have.text", "Panda")
    })

    it('Verifies assignments', () => {
        cy.get(".assignments").children("ul").children().should("have.length", 10)

        cy.get(".assignments")
            .children("ul")
            .children()
            .first()
            .contains("Anna Bowton")
            .should("exist")

        cy.get(".assignments")
            .children("ul")
            .children()
            .first()
            .contains("Sarasota")
            .should("exist")

        cy.get(".assignments")
            .children("ul")
            .children()
            .last()
            .contains("Rolando Gault")
            .should("exist")

        cy.get(".assignments")
            .children("ul")
            .children()
            .last()
            .contains("Tucson")
            .should("exist")
    })
})