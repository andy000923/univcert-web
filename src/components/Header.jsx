import { useNavigate, Link } from "react-router-dom";
import "./Header.css";
import expandMore1 from "../assets/expandMore1.svg";
import univcertlogo from "../assets/UNIVCERT.svg"
import SideBar from "./SideBar";
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
        <img className="univcertlogo" src={univcertlogo} onClick={goToHome}/>
        <div className="letter-frame">
          <div className="api-container">
            <span className="ap-is"><Link to="/instruction" style={{ textDecoration: "none" , color:"black"}}>APIs</Link></span>
            <img type="button" className="api-button" alt="apis" src={expandMore1} onClick={goTo1}/>
            <ul class="dropdown-content">
              <SideBar/>
            </ul>
          </div>
          <button className="frame-31"><Link to="/login" style={{ textDecoration: "none", color:"white"}}>API 키 발급</Link></button>
        </div>
      </div>
    </div>
  );
};
export default Header;