describe("Adder", () => {
  it("should sum two positive numbers", () => {
    cy.visit("/")

    const firstNumberPressAmount = 5
    const secondNumberPressAmount = 3

    for (let i = 0; i < firstNumberPressAmount; i++) {
      cy.get("#firstNumber").type("{uparrow}")
    }

    cy.get("#firstNumber").blur()

    for (let i = 0; i < secondNumberPressAmount; i++) {
      cy.get("#secondNumber").type("{uparrow}")
    }

    cy.get("#secondNumber").blur()

    cy.get("#firstNumber").should("have.value", 5)
    cy.get("#secondNumber").should("have.value", 3)

    cy.get(".adder__add-button").click()

    cy.get(".adder__result").invoke("text").should("equal", "Result: 8")
  })

  it("should sum two negative numbers", () => {
    cy.visit("/")

    const firstNumberPressAmount = 4
    const secondNumberPressAmount = 7

    for (let i = 0; i < firstNumberPressAmount; i++) {
      cy.get("#firstNumber").type("{downarrow}")
    }

    cy.get("#firstNumber").blur()

    for (let i = 0; i < secondNumberPressAmount; i++) {
      cy.get("#secondNumber").type("{downarrow}")
    }

    cy.get("#secondNumber").blur()

    cy.get("#firstNumber").should("have.value", -4)
    cy.get("#secondNumber").should("have.value", -7)

    cy.get(".adder__add-button").click()

    cy.get(".adder__result").invoke("text").should("equal", "Result: -11")
  })

  it("should sum a positive and a negative number", () => {
    cy.visit("/")

    const firstNumberPressAmount = 8
    const secondNumberPressAmount = 2

    for (let i = 0; i < firstNumberPressAmount; i++) {
      cy.get("#firstNumber").type("{uparrow}")
    }

    cy.get("#firstNumber").blur()

    for (let i = 0; i < secondNumberPressAmount; i++) {
      cy.get("#secondNumber").type("{downarrow}")
    }

    cy.get("#secondNumber").blur()

    cy.get("#firstNumber").should("have.value", 8)
    cy.get("#secondNumber").should("have.value", -2)

    cy.get(".adder__add-button").click()

    cy.get(".adder__result").invoke("text").should("equal", "Result: 6")
  })

  it("should not accept non-numerical input", () => {
    cy.visit("/")

    cy.get("#firstNumber").type("test")
    cy.get("#firstNumber").blur()

    cy.get("#secondNumber").type("TEST")
    cy.get("#secondNumber").blur()

    cy.get("#firstNumber").should("have.value", 0)
    cy.get("#secondNumber").should("have.value", 0)
  })
})
