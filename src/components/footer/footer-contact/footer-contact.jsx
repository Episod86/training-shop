import { SocialNetwork } from "../../social-network";
import style from "./footer-contact.module.css";

export const FooterContact = () => {
  return (
    <div className={style.footerContact}>
      <div className="wrapper">
        <div className={style.content}>
          <div className={style.title}>BE IN TOUCH WITH US:</div>
          <div className={style.email}>
            <input
              type="text"
              placeholder="Enter your email"
              className={style.input}
            />
            <button className={style.button} type="button">
              Join Us
            </button>
          </div>
          <SocialNetwork size="18" />
        </div>
      </div>
    </div>
  );
};
