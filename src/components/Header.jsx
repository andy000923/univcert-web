import { useNavigate } from "react-router-dom";
import "./Header.css";
import expandMore1 from "../assets/expandMore1.svg";
import univcertlogo from "../assets/UNIVCERT.svg"
import SideBar from "./SideBar";
const Header = (props) => {

  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  const goTo1 = () => {
    navigate("/instruction");
  };
  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="frame-32-instance-1">
      <div className={`frame-32 ${props.className || ""}`}>
        <img className="kakao-talk-photo-2023" src={univcertlogo} onClick={goToHome}/>
        <div className="letter-frame">
          <div className="api-container">
            <span className="ap-is">APIs</span>
            <img type="button" className="api-button" alt="apis" src={expandMore1} onClick={goTo1}/>
            <ul class="dropdown-content">
              <SideBar/>
            </ul>
          </div>
          <button className="frame-31" onClick={goToLogin}>API 키 발급</button>
        </div>
      </div>
    </div>
  );
};
export default Header;