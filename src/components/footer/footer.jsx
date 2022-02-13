import { FooterContact } from "./footer-contact";
import { FooterContent } from "./footer-content";
import { FooterInform } from "./footer-inform";

export const Footer = () => {
  return (
    <div data-test-id="footer">
      <FooterContact />
      <FooterContent />
      <FooterInform />
    </div>
  );
};
