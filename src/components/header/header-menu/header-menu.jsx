// import { contacts } from "../../../constants/header";

import style from "./header-menu.module.css";

export const HeaderMenu = () => {
  return (
    <div className={style.headerMenu}>
      <div className="wrapper">
        <div>CleverShop</div>
      </div>

      {/* <div className="wrapper">
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
      </div> */}
    </div>
  );
};
