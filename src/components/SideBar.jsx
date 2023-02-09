import { useNavigate } from "react-router-dom";
import "./SideBar.css";
import reference from "../assets/REFERENCE.png";
import Frame1 from "../assets/Frame1off.png";
import Frame2 from "../assets/Frame2.png";
import Frame3 from "../assets/Frame3.png";
import Frame4 from "../assets/Frame4.png";
import Frame5 from "../assets/Frame5.png";
import Frame6 from "../assets/Frame6.png";
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


  return (
    <div className="frame1-container">
        <img className="Frame0" src={Frame1} onClick={goTo1}/>
        <img className="reference1" src={reference} />
        <img className="Frame1" src={Frame2} onClick={goTo2}/>
        <img className="Frame1" src={Frame3} onClick={goTo3}/>
        <img className="Frame1" src={Frame4} onClick={goTo4}/>
        <img className="Frame1" src={Frame5} onClick={goTo5}/>
        <a href="https://incredible-raincoat-c52.notion.site/cdb55dd7ea5b475eaaf94ce76fa9eba4" target="_blank">
          <img className="Frame1" src={Frame6} />
        </a>
    </div>
  );
};
export default SideBar;