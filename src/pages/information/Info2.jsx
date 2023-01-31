import "./Info.css"
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import ContactUsButton from '../../components/ContactUsButton';
import f2 from "../../assets/f2.png";
const Info2= () => {
  return (
    <div className="slide1">
      <Header/>

      <div className="container">
        <SideBar/>
        <div className="img-container">
            <img className="FrameImg" src={f2} />
        </div>
        <div className="contact-container">
            <ContactUsButton/>
        </div>
      </div>

    </div>
  );
};
export default Info2;