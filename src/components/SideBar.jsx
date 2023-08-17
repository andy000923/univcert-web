import { useNavigate } from "react-router-dom";
import "./SideBar.css";
import reference from "../assets/REFERENCE.svg";
import Frame1 from "../assets/Frame1off.svg";
import Frame2 from "../assets/Frame2.svg";
import Frame3 from "../assets/Frame3.svg";
import Frame4 from "../assets/Frame4.svg";
import Frame5 from "../assets/Frame5.svg";
import Frame6 from "../assets/Frame6.svg";
import Frame7 from "../assets/Frame7.svg";
const SideBar = (props) => {
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
  }

  return (
    <div className="frame1-container">
        <img className="Frame0" alt="infotextimg" src={Frame1} onClick={goTo1}/>
        <img className="reference1" alt="infotextimg" src={reference} />
        <img className="Frame1" alt="infotextimg" src={Frame2} onClick={goTo2}/>
        <img className="Frame1" alt="infotextimg" src={Frame3} onClick={goTo3}/>
        <img className="Frame1" alt="infotextimg" src={Frame4} onClick={goTo4}/>
        <img className="Frame1" alt="infotextimg" src={Frame5} onClick={goTo5}/>
        <img className="Frame1" alt="infotextimg" src={Frame7} onClick={goTo7}/>
        <a href="https://incredible-raincoat-c52.notion.site/cdb55dd7ea5b475eaaf94ce76fa9eba4">
          <img className="Frame1" alt="infotextimg" src={Frame6} />
        </a>
    </div>
  );
};
export default SideBar;