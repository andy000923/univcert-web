import * as React from "react";
import "./Frame6.css";
const Frame6 = (props) => {
  return (
    <input
      className={`frame-6 ${props.className || ""}`}
      placeholder={props.submit || "Submit"}
      type="text"
    />
  );
};
export default Frame6;
