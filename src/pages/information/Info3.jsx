import { useNavigate } from "react-router-dom";
import "./Info.css"
import Header from "../../components/Header";
import ContactUsButton from '../../components/ContactUsButton';
import reference from "../../assets/REFERENCE.png";
import Frame1 from "../../assets/Frame1off.png";
import Frame2 from "../../assets/Frame2.png";
import Frame3 from "../../assets/Frame3on.png";
import Frame4 from "../../assets/Frame4.png";
import Frame5 from "../../assets/Frame5.png";
import f3 from "../../assets/f3.png";
const Info3= () => {
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
    <div className="slide1">
      <Header/>

      <div className="container">
      <div className="frame-container">
      <img className="Frame" src={Frame1} onClick={goTo1}/>
        <img className="reference" src={reference} />
        <img className="Frame" src={Frame2} onClick={goTo2}/>
        <img className="Frame" src={Frame3} onClick={goTo3}/>
        <img className="Frame" src={Frame4} onClick={goTo4}/>
        <img className="Frame" src={Frame5} onClick={goTo5}/>
      </div>
        <div className="img-container">
            <img className="FrameImg" src={f3} />
        </div>
        <div className="contact-container">
            <ContactUsButton/>
        </div>
      </div>

    </div>
  );
};
export default Info3;