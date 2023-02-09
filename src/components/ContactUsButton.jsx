import "./ContactUsButton.css";
import Button9 from "../assets/Button9.svg";
import image9 from "../assets/image9.svg";
const ContactUsButton = (props) => {
  return (
    <div className="flex-container-5">
      <img className="image9" src={image9} />
      <a href="https://fork-player-abb.notion.site/63617df354c042c39382d7f2d9a9bab9" target='_blank'>
        <img className="Button9" src={Button9} />
      </a>
    </div>
  );
}
export default ContactUsButton;
