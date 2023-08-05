import React, { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");
  const [firstOperand, setFirstOperand] = useState("");
  const [operator, setOperator] = useState("");
  const [isOperatorClicked, setIsOperatorClicked] = useState(false);

  const handleNumberClick = (number) => {
    if (display === "0" || isOperatorClicked) {
      setDisplay(number);
      setIsOperatorClicked(false);
    } else {
      setDisplay((prevDisplay) => prevDisplay + number);
    }
  };

  const handleOperatorClick = (op) => {
    if (firstOperand === "") {
      setFirstOperand(display);
      setOperator(op);
      setIsOperatorClicked(true);
    } else {
      const result = calculateResult();
      setFirstOperand(result);
      setOperator(op);
      setDisplay(result);
      setIsOperatorClicked(true);
    }
  };

  const handleEqualClick = () => {
    const result = calculateResult();
    setDisplay(result);
    setFirstOperand("");
    setOperator("");
    setIsOperatorClicked(true);
  };

  const calculateResult = () => {
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(display);
    switch (operator) {
      case "+":
        return (num1 + num2).toString();
      case "-":
        return (num1 - num2).toString();
      case "*":
        return (num1 * num2).toString();
      case "/":
        return (num1 / num2).toString();
      default:
        return display;
    }
  };

  const handleClearClick = () => {
    setDisplay("0");
    setFirstOperand("");
    setOperator("");
    setIsOperatorClicked(false);
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => handleNumberClick("7")}>7</button>
        <button onClick={() => handleNumberClick("8")}>8</button>
        <button onClick={() => handleNumberClick("9")}>9</button>
        <button onClick={() => handleOperatorClick("+")}>+</button>
        <button onClick={() => handleNumberClick("4")}>4</button>
        <button onClick={() => handleNumberClick("5")}>5</button>
        <button onClick={() => handleNumberClick("6")}>6</button>
        <button onClick={() => handleOperatorClick("-")}>-</button>
        <button onClick={() => handleNumberClick("1")}>1</button>
        <button onClick={() => handleNumberClick("2")}>2</button>
        <button onClick={() => handleNumberClick("3")}>3</button>
        <button onClick={() => handleOperatorClick("*")}>*</button>
        <button onClick={() => handleNumberClick("0")}>0</button>
        <button onClick={() => handleOperatorClick(".")}>.</button>
        <button onClick={handleEqualClick}>=</button>
        <button onClick={() => handleOperatorClick("/")}>/</button>
        <button onClick={handleClearClick}>C</button>
      </div>
    </div>
  );
}

export default App;
