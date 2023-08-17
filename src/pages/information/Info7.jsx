import "./Info.css"
import InfoBar from "../../components/InfoBar";
import Header from "../../components/Header";
import ContactUsButton from '../../components/ContactUsButton';
import f7 from "../../assets/f7.png";
const Info7= () => {
return (
    <div className="slide1">
    <Header/>

    <div className="container">
    <InfoBar/>
        <div className="img-container">
            <img className="FrameImg" alt="" src={f7} />
        </div>
        <div className="contact-container">
            <ContactUsButton/>
        </div>
    </div>

    </div>
);
};
export default Info7;