import React from "react";
import "./Display.css";

const Display = ({ compute, valueRight, valueLeft, operator }) => {
  return (
    <div className="displayContainer">
      <div className="calculationPart">
        {valueLeft} {operator} {valueRight}
      </div>
      <div className="result">{compute}</div>
    </div>
  );
};

export default Display;
