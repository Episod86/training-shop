import { useState } from "react";

import { MENU } from "../../constants/cart";

import cartClose from "./images/cart-close.svg";

import "./cart.scss";
import classNames from "classnames";

export const Cart = ({ isCartActive, setIsCartActive, onSetIsCartActive }) => {
  const [itemMenu, setItemMenu] = useState(MENU[0].itemName);

  return (
    <div className="cart">
      <div className={classNames("cart-block", { active: isCartActive })}>
        <div className="cart-header">
          <span>Shopping Cart</span>
          <img
            src={cartClose}
            alt="close"
            aria-hidden
            onClick={onSetIsCartActive}
          />
        </div>
        <div className="cart-menu">
          {MENU.map(({ itemName, name }) => (
            <div
              className={classNames("item", {
                selected: itemName === itemMenu,
              })}
              area-hidden
              onClick={() => setItemMenu(itemName)}
            >
              {name}
              <span>/</span>
            </div>
          ))}
        </div>
        {/* {itemMenu === "Payment" && <Payment itemMenu={itemMenu} />} */}
      </div>
      {/* )} */}

      <div
        className={classNames("mask", { active: isCartActive })}
        aria-hidden
        onClick={onSetIsCartActive}
      ></div>
    </div>
  );
};
