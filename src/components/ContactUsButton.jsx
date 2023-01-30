import * as React from "react";
import "./ContactUsButton.css";
import Button9 from "../assets/Button9.png";
import image9 from "../assets/image9.png";
const ContactUsButton = (props) => {
  return (
    <div className="flex-container-5">
      <img className="image9" src={image9} />
      <a href="https://github.com/UnivCert">
        <img className="Button9" src={Button9} />
      </a>
    </div>
  );
};
export default ContactUsButton;
