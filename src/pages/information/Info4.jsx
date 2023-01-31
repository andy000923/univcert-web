import "./Info.css"
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import ContactUsButton from '../../components/ContactUsButton';
import f4 from "../../assets/f4.png";
const Info4= () => {
  return (
    <div className="slide1">
      <Header/>

      <div className="container">
        <SideBar/>
        <div className="img-container">
            <img className="FrameImg" src={f4} />
        </div>
        <div className="contact-container">
            <ContactUsButton/>
        </div>
      </div>

    </div>
  );
};
export default Info4;