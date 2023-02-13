import { useNavigate } from "react-router-dom";
import "./Info.css"
import Header from "../../components/Header";
import ContactUsButton from '../../components/ContactUsButton';
import Fmain from "../../assets/main.svg";
import Fexport from "../../assets/export.svg";
import Frame1 from "../../assets/Frame1off.svg";
import Frame2 from "../../assets/Frame2.svg";
import Frame3 from "../../assets/Frame3.svg";
import Frame4 from "../../assets/Frame4on.svg";
import Frame5 from "../../assets/Frame5.svg";
import Frame6 from "../../assets/Frame6.svg";
import Frame7 from "../../assets/Frame7.svg";
import f4 from "../../assets/f4.png";
const Info4= () => {
  const navigate = useNavigate();

  const goTo1 = () => {
    navigate("/instruction");
  };
  const goTo2 = () => {
    navigate("/instruction1");
  };
  const goTo3 = () => {
    navigate("/instruction2");
  };
  const goTo4 = () => {
    navigate("/instruction3");
  };
  const goTo5 = () => {
    navigate("/instruction4");
  };
  const goTo7 = () => {
    navigate("/instruction5");
  };
  return (
    <div className="slide1">
      <Header/>

      <div className="container">
        <div className="frame-container">
          <img className="Frame" src={Frame1} onClick={goTo1}/>
          <img className="Fmain" src={Fmain} />
          <img className="Frame" alt="이용자 메일 인증 시작" src={Frame2} onClick={goTo2}/>
          <img className="Frame" alt="발송된 인증코드 입력" src={Frame3} onClick={goTo3}/>
          <img className="Fexport" src={Fexport}/>
          <img className="Frame" alt="인증된 이메일인지 확인" src={Frame4} onClick={goTo4}/>
          <img className="Frame" alt="인증된 유저 리스트 출력" src={Frame5} onClick={goTo5}/>
          <img className="Frame" alt="대학명 체크" src={Frame7} onClick={goTo7}/>
          <a href="https://incredible-raincoat-c52.notion.site/cdb55dd7ea5b475eaaf94ce76fa9eba4" target="_blank">
            <img className="Frame" src={Frame6} />
          </a>    
        </div>
        <div className="img-container">
            <img className="FrameImg" src={f4} />
        </div>
        <div className="contact-container">
            <ContactUsButton/>
        </div>
      </div>

    </div>
  );
};
export default Info4;