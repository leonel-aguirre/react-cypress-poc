import React, { useCallback } from "react"

const Adder = () => {
  const [firstNumber, setFirstNumber] = React.useState(0)
  const [secondNumber, setSecondNumber] = React.useState(0)
  const [result, setResult] = React.useState(firstNumber + secondNumber)

  const handleButtonClick = useCallback(() => {
    setResult(firstNumber + secondNumber)
  }, [firstNumber, secondNumber])

  return (
    <form className="adder">
      <p>Enter two numbers and click the button to sum them.</p>

      <label htmlFor="firstNumber">First Number: </label>
      <input
        id="firstNumber"
        type="number"
        step="1"
        value={firstNumber}
        onChange={(e) => setFirstNumber(Number(e.target.value))}
        onBlur={(e) => setFirstNumber(Number(e.target.value))}
      />
      <br />
      <label htmlFor="secondNumber">Second Number: </label>
      <input
        id="secondNumber"
        type="number"
        step="1"
        value={secondNumber}
        onChange={(e) => setSecondNumber(Number(e.target.value))}
        onBlur={(e) => setSecondNumber(Number(e.target.value))}
      />
      <br />
      <button onClick={handleButtonClick} type="button">
        Add
      </button>

      <p>Result: {result}</p>
    </form>
  )
}

export default Adder
