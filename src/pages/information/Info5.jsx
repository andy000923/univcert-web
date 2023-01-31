import "./Info.css"
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import ContactUsButton from '../../components/ContactUsButton';
import f5 from "../../assets/f5.png";
const Info5= () => {
  return (
    <div className="slide1">
      <Header/>

      <div className="container">
        <SideBar/>
        <div className="img-container">
            <img className="FrameImg" src={f5} />
        </div>
        <div className="contact-container">
            <ContactUsButton/>
        </div>
      </div>

    </div>
  );
};
export default Info5;