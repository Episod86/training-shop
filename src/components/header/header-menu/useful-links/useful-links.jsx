import classNames from "classnames";
import propTypes from "prop-types";
import { useState } from "react";

import cartImg from "../../../cart/images/cart.svg";

import { usefulLinks } from "../../../../constants/header";

import { enableBodyScroll, disableBodyScroll } from "../../../../utils/scroll";
import { Cart } from "../../../cart";

import "./useful-links.scss";

export const UsefulLinks = ({ isBurgerActive, setIsBurgerActive }) => {
  const [isCartActive, setIsCartActive] = useState(false);

  const onSetIsBurgerActive = () => {
    setIsBurgerActive(!isBurgerActive);
    if (isBurgerActive) {
      enableBodyScroll();
    } else {
      disableBodyScroll({ savePosition: true });
    }
  };

  const onSetIsCartActive = () => {
    setIsCartActive(!isCartActive);
    if (isCartActive) {
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

      <button type="button" className="cart-button" onClick={onSetIsCartActive}>
        <img src={cartImg} alt="cart" />
      </button>
      <Cart
        isCartActive={isCartActive}
        setIsCartActive={setIsCartActive}
        onSetIsCartActive={onSetIsCartActive}
      />
      <div
        className={classNames("burger-menu", { active: isBurgerActive })}
        onClick={onSetIsBurgerActive}
        aria-hidden
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
