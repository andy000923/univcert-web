import * as React from "react";
import "./Frame32.css";
import expandMore1 from "../assets/expandMore1.svg";
import kakaoTalkPhoto2023 from "../assets/kakaoTalkPhoto2023.png";
const Frame32 = (props) => {
  return (
    <div className={`frame-32 ${props.className || ""}`}>
      <img className="kakao-talk-photo-2023" src={kakaoTalkPhoto2023} />
      <span className="ap-is">{props.apIs || "APIs"}</span>
      <img className="expand-more-1" src={props.expandMore1 || expandMore1} />
      <span className="documentation">
        {props.documentation || "Documentation"}
      </span>
      <span className="pricing">{props.pricing || "Pricing"}</span>
      <span className="login">{props.login || "Login"}</span>
      <button className="frame-31">{props.signUp || "SIGN UP"}</button>
    </div>
  );
};
export default Frame32;
