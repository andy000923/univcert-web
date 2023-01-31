import "./Info.css"
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import ContactUsButton from '../../components/ContactUsButton';
import f3 from "../../assets/f3.png";
const Info3= () => {
  return (
    <div className="slide1">
      <Header/>

      <div className="container">
        <SideBar/>
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