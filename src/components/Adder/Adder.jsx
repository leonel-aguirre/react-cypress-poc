import React, { useCallback } from "react"

const Adder = () => {
  const [firstNumber, setFirstNumber] = React.useState(0)
  const [secondNumber, setSecondNumber] = React.useState(0)
  const [result, setResult] = React.useState(firstNumber + secondNumber)

  // const handleButtonClick = useCallback(() => {
  //   setResult(firstNumber + secondNumber)
  // }, [firstNumber, secondNumber])

  const handleButtonClick = () => {
    setResult(firstNumber + secondNumber)
  }

  return (
    <form className="adder">
      <p className="adder__instructions">
        Enter two numbers and click the button to sum them.
      </p>

      <label htmlFor="firstNumber" className="adder__label">
        First Number:{" "}
      </label>
      <input
        className="adder__input"
        id="firstNumber"
        name="firstNumber"
        type="number"
        step="1"
        value={firstNumber}
        onChange={(e) => setFirstNumber(Number(e.target.value))}
        onBlur={(e) => setFirstNumber(Number(e.target.value))}
      />
      <br />
      <label htmlFor="secondNumber" className="adder__label">
        Second Number:{" "}
      </label>
      <input
        className="adder__input"
        id="secondNumber"
        name="secondNumber"
        type="number"
        step="1"
        value={secondNumber}
        onChange={(e) => setSecondNumber(Number(e.target.value))}
        onBlur={(e) => setSecondNumber(Number(e.target.value))}
      />
      <br />
      <button
        className="adder__add-button"
        onClick={handleButtonClick}
        type="button"
        name="addButton"
      >
        Add
      </button>

      <p className="adder__result">Result: {result}</p>
    </form>
  )
}

export default Adder
