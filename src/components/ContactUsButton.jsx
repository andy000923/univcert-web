import "./ContactUsButton.css";
import Button9 from "../assets/Button9.svg";
import image9 from "../assets/image9.svg";
const ContactUsButton = (props) => {
  return (
    <div className="flex-container-5">
      <a href="https://github.com/in-seo/univcert">
        <img className="image9" alt="github" src={image9} />
      </a>
      <a href="https://fork-player-abb.notion.site/63617df354c042c39382d7f2d9a9bab9">
        <img className="Button9" alt="notion" src={Button9} />
      </a>
    </div>
  );
}
export default ContactUsButton;
