import React from "react";
import "./Button.css";

function ClearButton({ value, color, handleClick }) {
  const clickBtn = () => {
    handleClick();
  };
  return (
    <div className={`btn-${color}`} onClick={() => clickBtn()}>
      {value}
    </div>
  );
}

export default ClearButton;
