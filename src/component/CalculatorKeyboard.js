import React from "react";
import Btn from "./Btn";
import ScientificButtonKeyboard from "./ScientificButtonKeyboard";
export default function CalculatorKeyboard({
  operationHandler,
  sliceHandler,
  calculate,
  showTypeKeyboard,
}) {
  return (
    <div className="keyboard-container">
      {" "}
      <div className="number-keyboard-container">
        <Btn
          operationHandler={operationHandler}
          btnTextContent={"("}
          backgroundColor={"#dadce0"}
        />
        <Btn
          operationHandler={operationHandler}
          btnTextContent={")"}
          backgroundColor={"#dadce0"}
        />
        <Btn
          operationHandler={operationHandler}
          btnTextContent={"%"}
          backgroundColor={"#dadce0"}
        />

        {/* slice button */}
        <button className="key-btn" onClick={sliceHandler}>
          CE
        </button>
        <Btn
          operationHandler={operationHandler}
          btnTextContent={"7"}
          backgroundColor={"#f1f3f4"}
        />
        <Btn
          operationHandler={operationHandler}
          btnTextContent={"8"}
          backgroundColor={"#f1f3f4"}
        />
        <Btn
          operationHandler={operationHandler}
          btnTextContent={"9"}
          backgroundColor={"#f1f3f4"}
        />
        <Btn
          operationHandler={operationHandler}
          btnTextContent={"/"}
          backgroundColor={"#dadce0"}
        />
        <Btn
          operationHandler={operationHandler}
          btnTextContent={"4"}
          backgroundColor={"#f1f3f4"}
        />
        <Btn
          operationHandler={operationHandler}
          btnTextContent={"5"}
          backgroundColor={"#f1f3f4"}
        />
        <Btn
          operationHandler={operationHandler}
          btnTextContent={"6"}
          backgroundColor={"#f1f3f4"}
        />
        <Btn
          operationHandler={operationHandler}
          btnTextContent={"*"}
          backgroundColor={"#dadce0"}
        />
        <Btn
          operationHandler={operationHandler}
          btnTextContent={"1"}
          backgroundColor={"#f1f3f4"}
        />
        <Btn
          operationHandler={operationHandler}
          btnTextContent={"2"}
          backgroundColor={"#f1f3f4"}
        />
        <Btn
          operationHandler={operationHandler}
          btnTextContent={"3"}
          backgroundColor={"#f1f3f4"}
        />
        <Btn
          operationHandler={operationHandler}
          btnTextContent={"-"}
          backgroundColor={"#dadce0"}
        />
        <Btn
          operationHandler={operationHandler}
          btnTextContent={"0"}
          backgroundColor={"#f1f3f4"}
        />
        <Btn
          operationHandler={operationHandler}
          btnTextContent={"."}
          backgroundColor={"#f1f3f4"}
        />
        <button
          onClick={calculate}
          className="key-btn"
          style={{ backgroundColor: "#4285f4" }}
        >
          =
        </button>
        <Btn
          operationHandler={operationHandler}
          btnTextContent={"+"}
          backgroundColor={"#dadce0"}
        />
      </div>
      {showTypeKeyboard && (
        <ScientificButtonKeyboard operationHandler={operationHandler} />
      )}
    </div>
  );
}
