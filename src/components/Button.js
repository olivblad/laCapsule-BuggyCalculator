import React from "react";
import "./Button.css";

const Button = ({ value, color, type, handleClick }) => {
  var clickBtn = () => {
    handleClick(value, type);
  };

  return (
    <div className={`btn-${color}`} onClick={() => clickBtn()}>
      {value}
    </div>
  );
};

export default Button;
