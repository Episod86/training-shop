import { contactUs, footerMenu } from "../../../constants/footer";
import { Link } from "react-router-dom";

import "./footer-content.scss";

export const FooterContent = () => {
  return (
    <div className="footer-content">
      <div className="wrapper">
        {footerMenu.map(({ key, items }) => (
          <div className="items" key={key}>
            {items.map(({ text, href }, index) => (
              <Link
                to={`/${href}`}
                data-test-id={`footer-nav-link-${href}`}
                className="item"
                key={index.toString()}
              >
                {text}
              </Link>
            ))}
          </div>
        ))}

        <div className="items">
          <div className="item">CONTACT US</div>
          {contactUs.map(({ text, imageSrc }) => (
            <a href="#!" className="item">
              <img src={imageSrc} alt="icon" />
              {text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
