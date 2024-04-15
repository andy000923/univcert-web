import "./ContactUsButton.css";
import github from "../assets/github.svg";
const ContactUsButton = (props) => {
  return (
    <div className="flex-container-5">
      <a href="https://github.com/in-seo/univcert" target="_blank" rel="noopener noreferrer">
        <img className="github" alt="github" src={github} />
      </a>
      <a href="https://fork-player-abb.notion.site/63617df354c042c39382d7f2d9a9bab9" target="_blank" rel="noopener noreferrer">
        <button className="contact-button">Contact Us</button>
      </a>
    </div>
  );
}
export default ContactUsButton;
