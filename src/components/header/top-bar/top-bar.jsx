import { contacts } from "../../../constants/header";
import { SocialNetwork } from "../../social-network";
import style from "./top-bar.module.css";

export const TopBar = () => {
  return (
    <div className={style.topBar}>
      <div className="wrapper">
        <div className={style.container}>
          <div className={style.contacts}>
            {contacts.map(({ key, text, imageSrc }) => (
              <a href="#!" className={style.contactItem} key={key}>
                <img src={imageSrc} alt="icon" />
                <span>{text}</span>
              </a>
            ))}
          </div>
          <SocialNetwork />
        </div>
      </div>
    </div>
  );
};
