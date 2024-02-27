import { useNavigate, Link } from "react-router-dom";
import "./Header.css";
import expandMore1 from "../assets/expandMore1.svg";
import univcertlogo from "../assets/UNIVCERT.svg"
import DropBar from "./DropBar";
const Header = () => {

  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  const goTo1 = () => {
    navigate("/instruction");
  };

  return (
    <div className="frame-32-instance-1">
      <div className="frame-32">
        <img className="univcertlogo" src={univcertlogo} alt="mainlogo" onClick={goToHome}/>
        <div className="letter-frame">
          <div className="api-container">
          <Link to="/instruction" style={{ textDecoration: "none" , color:"black"}}><span className="ap-is">APIs</span></Link>
            <img type="button" className="api-button" alt="apis" src={expandMore1} onClick={goTo1}/>
            <ul class="dropdown-content">
              <DropBar/>
            </ul>
          </div>
          <Link to="/login" style={{ textDecoration: "none", color:"white"}}><button className="frame-31">API 키 발급</button></Link>
        </div>
      </div>
    </div>
  );
};
export default Header;