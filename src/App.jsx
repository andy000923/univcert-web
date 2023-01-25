import * as React from "react";
import "./App.css";
import rectangle12 from "./assets/rectangle12.svg";
import expandMore1 from "./assets/expandMore1.svg";
import group83 from "./assets/group83.svg";
import search1 from "./assets/search1.svg";
import vector4 from "./assets/vector4.svg";
import group79 from "./assets/group79.svg";
import group81 from "./assets/group81.svg";
import Frame6 from "./components/Frame6";
import Frame32 from "./components/Frame32";
import Frame7 from "./components/Frame7";
import Button from "./components/Button";
const App = () => {
  const propsData = {
    frame32: {
      signUp: "SIGN UP",
      search1: search1,
      apIs: "APIs",
      login: "Login",
      expandMore1: expandMore1,
      documentation: "Documentation",
      pricing: "Pricing",
    },
    frame6: {
      abc123Navercom: "abc123@naver.com",
      submit: "Submit",
    },
    frame7: {
      text: "Text",
    },
    frame8: {
      text: "Text",
    },
    button: {
      button: "Contact Us",
    },
  };
  return (
    <div className="slide-169-1">
      <Frame32 className="frame-32-instance-1" {...propsData.frame32} />
      <div className="rectangle-1">
        <div className="flex-container">
          <span className="email-validation-and">
            Email Validation and Verification API
          </span>
          <span className="improve-your-deliver">
            Improve your delivery rate and clean your email lists with
            Abstracti;s industry-leading email cerification API
          </span>
          <Frame6 className="frame-6-instance-1" {...propsData.frame6} />
        </div>
        <div className="flex-container-1">
          <Frame7 className="frame-7-instance-1" {...propsData.frame7} />
          <Frame7 className="frame-8-instance" {...propsData.frame8} />
        </div>
      </div>
      <div className="flex-container-2">
        <img className="group-83" src={group83} />
        <span className="aeogbugbheumf">대학 도메인 기반 확실한 인증 로직</span>
        <img className="vector-4" src={vector4} />
        <span className="api">보안에 최적화 된 API</span>
        <img className="group-79" src={group79} />
        <span className="lvnpiygrakegh">소속명에 따라 메일 내용 변형</span>
        <div className="flex-container-3">
          <div className="rectangle-1-1">
            <span className="certified">CERTIFIED</span>
          </div>
          <img className="group-81" src={group81} />
        </div>
        <span className="stiojaqvggolf">인증에 필요한 로직 불필요</span>
        <div className="flex-container-4">
          <span className="ldhmlfgdsmvnp">쉽다.</span>
          <img className="rectangle-12" src={rectangle12} />
        </div>
        <span className="api-1">초보자도 사용할 수 있는 API</span>
      </div>
      <div className="flex-container-5">
        <span className="qzxabawpowvbe">그림은 교체예정</span>
        <Button className="button-instance-1" {...propsData.button} />
      </div>
    </div>
  );
};
export default App;
