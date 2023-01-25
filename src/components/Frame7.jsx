import * as React from "react";
import "./Frame7.css";
const Frame7 = (props) => {
  return (
    <div className={`frame-7 ${props.className || ""}`}>
    {props.text || "Text"}
  </div>
  );
};
export default Frame7;