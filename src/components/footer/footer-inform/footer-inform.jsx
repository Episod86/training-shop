import { footerIcons } from "../../../constants/footer";
import "./footer-inform.scss";

export const FooterInform = () => {
  return (
    <div className="footer-inform">
      <div className="wrapper">
        <div className="content">
          <div className="text">Copyright © 2032 all rights reserved</div>
          <div className="icons">
            {footerIcons.map(({ key, alt, imageSrc }) => (
              <img src={imageSrc} alt={alt} key={key} className="icon-img" />
            ))}
          </div>
          <a href="https://clevertec.ru/study/frontend.html">
            Clevertec.ru/training
          </a>
        </div>
      </div>
    </div>
  );
};
