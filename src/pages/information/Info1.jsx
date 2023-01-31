import "./Info.css"
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import ContactUsButton from '../../components/ContactUsButton';
import f1_1 from "../../assets/f1-1.png";
import f1_2 from "../../assets/f1-2.png";
const Info1 = () => {
  return (
    <div className="slide1">
      <Header/>

      <div className="container">
        <SideBar/>
        <div className="img-container">
            <img className="FrameImg" src={f1_1} />
            <img className="FrameImg" src={f1_2} />
        </div>
        <div className="contact-container">
            <ContactUsButton/>
        </div>
      </div>

    </div>
  );
};
export default Info1;
