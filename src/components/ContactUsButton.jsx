import "./ContactUsButton.css";
import Button9 from "../assets/Button9.png";
import image9 from "../assets/image9.png";
const ContactUsButton = (props) => {
  return (
    <div className="flex-container-5">
      <img className="image9" src={image9} />
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=univcertofficial@gmail.com&su=SUBJECT&body=BODY" target='_blank'>
        <img className="Button9" src={Button9} />
      </a>
    </div>
  );
}
export default ContactUsButton;
