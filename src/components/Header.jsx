import * as React from "react";
import "./Header.css";
import expandMore1 from "../assets/expandMore1.svg";
import kakaoTalkPhoto2023 from "../assets/kakaoTalkPhoto2023.png";
const Header = (props) => {
  return (
    <div className='header-container'>
      <img className="kakao-talk-photo-2023" src={kakaoTalkPhoto2023} />

      <span className="apis">{props.apIs || "APIs"}</span>
      <img className="expand-more-1" src={props.expandMore1 || expandMore1} />
      
      <span className="documentation">{props.documentation || "Documentation"}</span>

      <span className="pricing">{props.pricing || "Pricing"}</span>

      <span className="login">{props.login || "Login"}</span>

      <button className="signup-button">{props.signUp || "SIGN UP"}</button>
    </div>
  );
};
export default Header;
