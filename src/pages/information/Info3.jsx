import { Link } from "react-router-dom";
import "./Info.css"
import Header from "../../components/Header";
import ContactUsButton from '../../components/ContactUsButton';
import Frame1 from "../../assets/Frame1off.svg";
import Frame2 from "../../assets/Frame2.svg";
import Frame3 from "../../assets/Frame3on.svg";
import Frame4 from "../../assets/Frame4.svg";
import Frame5 from "../../assets/Frame5.svg";
import Frame6 from "../../assets/Frame6.svg";
import Frame7 from "../../assets/Frame7.svg";
import Fmain from "../../assets/main.svg";
import Fexport from "../../assets/export.svg";
import f3 from "../../assets/f3.png";
const Info3= () => {

  return (
    <div className="slide1">
      <Header/>

      <div className="container">
        <div className="frame-container">
          <Link to="/instruction" style={{ textDecoration: "none" , color:"black"}}> <img className="Frame" alt="description" src={Frame1}/></Link>
          <img className="Fmain" alt="description" src={Fmain} />
          <Link to="/instruction1" style={{ textDecoration: "none" , color:"black"}}> <img className="Frame" alt="이용자 메일 인증 시작" src={Frame2}/></Link>
          <Link to="/instruction2" style={{ textDecoration: "none" , color:"black"}}><img className="Frame" alt="발송된 인증코드 입력" src={Frame3}/></Link>
          <img className="Fexport" alt="description" src={Fexport}/>
          <Link to="/instruction3" style={{ textDecoration: "none" , color:"black"}}><img className="Frame" alt="인증된 이메일인지 확인" src={Frame4}/></Link>
          <Link to="/instruction4" style={{ textDecoration: "none" , color:"black"}}><img className="Frame" alt="인증된 유저 리스트 출력" src={Frame5}/></Link>
          <Link to="/instruction5" style={{ textDecoration: "none" , color:"black"}}><img className="Frame" alt="대학명 체크" src={Frame7}/></Link>
          <a href="https://incredible-raincoat-c52.notion.site/cdb55dd7ea5b475eaaf94ce76fa9eba4">
            <img className="Frame" alt="description" src={Frame6} />
          </a>
          
        </div>
        <div className="img-container">
            <img className="FrameImg" alt="description" src={f3} />
        </div>
        <div className="contact-container">
            <ContactUsButton/>
        </div>
      </div>

    </div>
  );
};
export default Info3;