import "./Info.css"
import InfoSideBar from "../../components/InfoSideBar";
import Header from "../../components/Header";
import ContactUsButton from '../../components/ContactUsButton';
import f5 from "../../assets/f5.png";
const Info5= () => {
  
  return (
    <div className="slide1">
      <Header/>

      <div className="container">
      <InfoSideBar/>
        <div className="img-container">
            <img className="FrameImg" alt="" src={f5} />
        </div>
        <div className="contact-container">
            <ContactUsButton/>
        </div>
      </div>

    </div>
  );
};
export default Info5;