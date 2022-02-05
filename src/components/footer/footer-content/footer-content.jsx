import style from "./footer-content.module.css";

import { contactUs, footerMenu } from "../../../constants/footer";
import { Link } from "react-router-dom";

export const FooterContent = () => {
  return (
    <div className={style.footerContent}>
      <div className="wrapper">
        <div className={style.content}>
          {footerMenu.map(({ key, items }) => (
            <div className={style.items} key={key}>
              {items.map(({ text, href }, index) => (
                <Link
                  to={`/${href}`}
                  className={style.item}
                  key={index.toString()}
                >
                  {text}
                </Link>
              ))}
            </div>
          ))}

          <div className={style.items}>
            <div className={style.item}>CONTACT US</div>
            {contactUs.map(({ text, imageSrc }) => (
              <a href="#!" className={style.item}>
                <img src={imageSrc} alt="icon" />
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
