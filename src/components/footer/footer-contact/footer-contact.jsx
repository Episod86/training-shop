import { SocialNetwork } from "../../social-network";
import "./footer-contact.scss";

export const FooterContact = () => {
  return (
    <div className="footer-contact">
      <div className="wrapper">
        <div className="title">BE IN TOUCH WITH US:</div>
        <div className="email">
          <input type="text" placeholder="Enter your email" className="input" />
          <button className="button" type="button">
            Join Us
          </button>
        </div>
        <SocialNetwork size="18" />
      </div>
    </div>
  );
};
