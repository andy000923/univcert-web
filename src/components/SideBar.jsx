
import "./SideBar.css";
import reference from "../assets/REFERENCE.png";
import Frame1 from "../assets/Frame1.png";
import Frame2 from "../assets/Frame2.png";
import Frame3 from "../assets/Frame3.png";
import Frame4 from "../assets/Frame4.png";
import Frame5 from "../assets/Frame5.png";
const SideBar = (props) => {
  return (
    <div className="frame-container">
        <img className="Frame" src={Frame1} />
        <img className="reference" src={reference} />
        <img className="Frame" src={Frame2} />
        <img className="Frame" src={Frame3} />
        <img className="Frame" src={Frame4} />
        <img className="Frame" src={Frame5} />
    </div>
  );
};
export default SideBar;