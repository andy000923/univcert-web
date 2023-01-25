import * as React from "react";
import "./Button.css";
const Button = (props) => {
  return (
    <button className={`button ${props.className || ""}`}>
      {props.button || "Contact Us"}
    </button>
  );
};
export default Button;
