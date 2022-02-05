import { footerIcons } from "../../../constants/footer";
import style from "./footer-inform.module.css";

export const FooterInform = () => {
  return (
    <div className={style.footerInform}>
      <div className="wrapper">
        <div className={style.content}>
          <div className={style.text}>Copyright © 2032 all rights reserved</div>
          <div className={style.icons}>
            {footerIcons.map(({ key, alt, imageSrc }) => (
              <img src={imageSrc} alt={alt} key={key} />
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
