import { useNavigate } from "react-router-dom";
import "./SideBar.css";
import reference from "../assets/REFERENCE.png";
import Frame1 from "../assets/Frame1off.png";
import Frame2 from "../assets/Frame2.png";
import Frame3 from "../assets/Frame3.png";
import Frame4 from "../assets/Frame4.png";
import Frame5 from "../assets/Frame5.png";
const SideBar = (props) => {
  const navigate = useNavigate();

  const goTo1 = () => {
    navigate("/1");
  };
  const goTo2 = () => {
    navigate("/2");
  };
  const goTo3 = () => {
    navigate("/3");
  };
  const goTo4 = () => {
    navigate("/4");
  };
  const goTo5 = () => {
    navigate("/5");
  };


  return (
    <div className="frame1-container">
        <img className="Frame1" src={Frame1} onClick={goTo1}/>
        <img className="reference1" src={reference} />
        <img className="Frame1" src={Frame2} onClick={goTo2}/>
        <img className="Frame1" src={Frame3} onClick={goTo3}/>
        <img className="Frame1" src={Frame4} onClick={goTo4}/>
        <img className="Frame1" src={Frame5} onClick={goTo5}/>
    </div>
  );
};
export default SideBar;