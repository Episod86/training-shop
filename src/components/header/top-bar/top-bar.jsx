import { contacts } from "../../../constants/header";
import { SocialNetwork } from "../../social-network";

import "./top-bar.scss";

export const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="wrapper">
        <div className="contacts">
          {contacts.map(({ key, text, imageSrc }) => (
            <a href="#!" className="contact-item" key={key}>
              <img src={imageSrc} alt="icon" />
              <span>{text}</span>
            </a>
          ))}
        </div>
        <SocialNetwork size="14" />
      </div>
    </div>
  );
};
