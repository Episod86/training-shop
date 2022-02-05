import { FooterContact } from "./footer-contact";
import { FooterContent } from "./footer-content";
import { FooterInform } from "./footer-inform";
import style from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={style.footer} data-test-id="footer">
      <FooterContact />
      <FooterContent />
      <FooterInform />
    </div>
  );
};
