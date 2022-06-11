import React from "react";
// react icons
import { BiReset } from "react-icons/bi";
// component
import Btn from "./Btn";
import CalculatorKeyboard from "./CalculatorKeyboard";
import { useState } from "react";
export default function CalculatorUi({
  operationHandler,
  figure,
  sliceHandler,
  result,
  calculate,
  reset,
}) {
  const [showTypeKeyboard, setshowTypeKeyboard] = useState(false);
  return (
    <div className="main-container">
      <div className="screen-container">
        {/* reset btn */}
        <button onClick={reset} className="key-btn " id="ac-btn">
          <BiReset />
        </button>
        <input
          className="current-operation"
          type="text"
          defaultValue={figure}
          attribute="readonly"
          onFocus={(e) => {
            document.activeElement.blur();
          }}
        />
        <h4></h4>
        <h4 className="result-operation">{result}</h4>
      </div>
      <CalculatorKeyboard
        operationHandler={operationHandler}
        sliceHandler={sliceHandler}
        calculate={calculate}
        showTypeKeyboard={showTypeKeyboard}
      />

      <div className="calculator-KeyboardType">
        <Btn
          btnTextContent={"123"}
          operationHandler={() => {
            setshowTypeKeyboard(false);
          }}
        />
        <Btn
          btnTextContent={"FX"}
          operationHandler={() => {
            setshowTypeKeyboard(true);
          }}
        />
      </div>
    </div>
  );
}
