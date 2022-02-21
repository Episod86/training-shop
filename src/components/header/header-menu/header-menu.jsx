import { useState } from "react";

import { Link } from "react-router-dom";
import { Menu } from "./menu";
import { UsefulLinks } from "./useful-links/useful-links";

import "./header-menu.scss";

export const HeaderMenu = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  return (
    <div className="wrapper">
      <div className="header-menu">
        <Link to="/" className="header-logo" data-test-id="header-logo-link">
          CleverShop
        </Link>
        <Menu
          isBurgerActive={isBurgerActive}
          setIsBurgerActive={setIsBurgerActive}
        />
        <UsefulLinks
          isBurgerActive={isBurgerActive}
          setIsBurgerActive={setIsBurgerActive}
        />
      </div>
    </div>
  );
};
