import * as React from "react";
import "./Header.css";
import expandMore1 from "../assets/expandMore1.svg";
import kakaoTalkPhoto2023 from "../assets/kakaoTalkPhoto2023.png";
import univcertlogo from "../assets/UNIVCERT.png"
const Header = (props) => {
  return (
    <div className="frame-32-instance-1">
      <div className={`frame-32 ${props.className || ""}`}>
        <img className="kakao-talk-photo-2023" src={univcertlogo} />
        <div className="letter-frame">
          <div className="api-container">
            <span className="ap-is">APIs</span>
            <img type="button" alt="" src={expandMore1} onClick=" "/>
          </div>
          <span className="login">Login</span>
          <button className="frame-31">API 키 발급</button>
          </div>
      </div>
    </div>
  );
};
export default Header;
