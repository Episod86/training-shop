import classNames from "classnames";
import propTypes from "prop-types";
import { usefulLinks } from "../../../../constants/header";

import { enableBodyScroll, disableBodyScroll } from "../../../../utils/scroll";

import "./useful-links.scss";

export const UsefulLinks = ({ isBurgerActive, setIsBurgerActive }) => {
  const onSetIsBurgerActive = () => {
    setIsBurgerActive(!isBurgerActive);
    if (isBurgerActive) {
      enableBodyScroll();
    } else {
      disableBodyScroll({ savePosition: true });
    }
  };
  return (
    <div className="useful-links">
      {usefulLinks.map(({ id, imageSrc, name }) => (
        <img src={imageSrc} alt={name} key={id} />
      ))}
      <div
        className={classNames("burger-menu", { active: isBurgerActive })}
        onClick={onSetIsBurgerActive}
        data-test-id="burger-menu-btn"
      >
        <hr className="burger-line-first" />
        <hr className="burger-line-second" />
        <hr className="burger-line-third" />
      </div>
    </div>
  );
};

UsefulLinks.propTypes = {
  isBurgerActive: propTypes.bool.isRequired,
  setIsBurgerActive: propTypes.func.isRequired,
};
