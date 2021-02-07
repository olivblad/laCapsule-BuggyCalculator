import React, { useState } from "react";
import Button from "./components/Button";
import Display from "./components/Display";
import "./App.css";
import { buttonData } from "./buttonData";
import ClearButton from "./components/ClearButton";

function App() {
  const [valueRight, setValueRight] = useState("");
  const [valueLeft, setValueLeft] = useState("");
  const [operator, setOperator] = useState(null);
  const [compute, setCompute] = useState(0);

  const handleClick = (value, type) => {
    if (type === "number") {
      if (!valueLeft) {
        setValueLeft(valueLeft + value);
      } else if (valueLeft && operator === null) {
        setValueLeft(valueLeft + value);
      } else {
        setValueRight(valueRight + value);
      }
    } else if (type === "operator") {
      setOperator(value);
    } else if (type === "compute") {
      switch (operator) {
        case "+":
          setCompute(parseFloat(valueLeft) + parseFloat(valueRight));
          break;
        case "-":
          setCompute(parseFloat(valueLeft) - parseFloat(valueRight));
          break;
        case "*":
          setCompute(parseFloat(valueLeft) * parseFloat(valueRight));
          break;
        case "/":
          setCompute(parseFloat(valueLeft) / parseFloat(valueRight));
          break;
      }

      setValueLeft("");
      setValueRight("");
      setOperator(null);
    }
  };

  const clearCalculator = () => {
    setValueLeft("");
    setValueRight("");
    setOperator(null);
    setCompute(0);
  };

  const caltos = buttonData.map((row, index) => {
    const rowComponents = row.map((button) => (
      <Button
        key={button.value}
        handleClick={handleClick}
        value={button.value}
        type={button.type}
        color={button.color}
      />
    ));
    return (
      <div key={index} className="row">
        {rowComponents}
      </div>
    );
  });

  return (
    <div className="App">
      <Display
        compute={compute}
        valueRight={valueRight}
        valueLeft={valueLeft}
        operator={operator}
      />
      {caltos}
      <div className="row">
        <ClearButton
          value="Clear"
          color="orange"
          handleClick={clearCalculator}
        />
      </div>
    </div>
  );
}

export default App;
