import React from "react";

export default function Btn({
  btnTextContent,
  backgroundColor,
  operationHandler,
}) {
  return (
    <button
      className="key-btn"
      style={{ backgroundColor: backgroundColor }}
      onClick={operationHandler}
    >
      {btnTextContent}
    </button>
  );
}
