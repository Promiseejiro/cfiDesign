import { useState, useEffect } from "react";
import { FaSquareRootAlt } from "react-icons/fa";
// component
import CalculatorUi from "./component/CalculatorUi";

export default function App() {
  // state
  const [currentOperationInput, setCurrentOperationInput] = useState("");
  const [result, setResult] = useState("");
  const [inputDisplay, setInputDisplay] = useState("");
  const [key, setKey] = useState("");

  // function

  const calculate = () => {
    setResult(eval(currentOperationInput));
    // setCurrentOperationInput(currentOperationInput);
  };

  const operationHandler = (e) => {
    const keyValue = e.currentTarget.textContent;
    setKey(keyValue);
    if (keyValue === "sin") {
      setCurrentOperationInput(`Math.sin(`);
    } else if (keyValue === "cos") {
      setCurrentOperationInput(`Math.cos(`);
    } else if (keyValue === "log") {
      setCurrentOperationInput(`Math.log(`);
    } else if (keyValue === "cos") {
      setCurrentOperationInput(`Math.cos(`);
    } else if (keyValue === "√") {
      setCurrentOperationInput(`Math.sqrt(`);
    } else if (keyValue === "tan") {
      setCurrentOperationInput(`Math.tan(`);
    } else if (keyValue === "EXP") {
      setCurrentOperationInput(`Math.exp(`);
    } else if (keyValue === "PI") {
      setCurrentOperationInput(`Math.PI(`);
    } else if (keyValue === "PI") {
      setCurrentOperationInput(`Math.PI(`);
    } else if (e.currentTarget.textContent === "e") {
      setCurrentOperationInput(`Math.exp(`);
      console.log(currentOperationInput);
    } else {
      setCurrentOperationInput(
        currentOperationInput + e.currentTarget.textContent
      );
    }
  };

  const sliceHandler = () => {
    setCurrentOperationInput(
      currentOperationInput.slice(0, currentOperationInput.length - 1)
    );
    if (currentOperationInput.length === 1) {
      setResult("");
    }
  };
  const reset = () => {
    setCurrentOperationInput("");
    setResult("");
  };

  useEffect(() => {
    if (currentOperationInput.includes("Math.")) {
      setInputDisplay(currentOperationInput.replace("Math.", ""));
    } else if (currentOperationInput.includes("Math.sqrt(")) {
      setInputDisplay(currentOperationInput.replace("Math.sqrt(", "√"));
      console.log("hey");
    } else {
      setInputDisplay(currentOperationInput);
    }
    console.log(window);
  }, [currentOperationInput]);

  return (
    <div className="container">
      <CalculatorUi
        operationHandler={operationHandler}
        figure={inputDisplay}
        sliceHandler={sliceHandler}
        result={result}
        calculate={calculate}
        reset={reset}
      />
    </div>
  );
}
