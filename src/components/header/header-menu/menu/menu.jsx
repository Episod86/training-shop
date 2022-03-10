import classNames from "classnames";
import propTypes from "prop-types";

import { Link } from "react-router-dom";
import { menu } from "../../../../constants/header";
import { enableBodyScroll } from "../../../../utils/scroll";

import "./menu.scss";

export const Menu = ({ isBurgerActive, setIsBurgerActive }) => {
  const onSetIsBurgerActive = () => {
    setIsBurgerActive(!isBurgerActive);
    enableBodyScroll();
  };
  return (
    <div>
      <div
        className={classNames("menu", { active: isBurgerActive })}
        data-test-id="burger-menu"
      >
        {menu.map(({ id, path, name }) => (
          <Link
            key={id}
            to={`/${path}`}
            className="menu-item"
            data-test-id={`menu-link-${path}`}
            onClick={isBurgerActive && onSetIsBurgerActive}
          >
            <span>{name}</span>
          </Link>
        ))}
      </div>
      <div
        className={classNames("mask", { active: isBurgerActive })}
        aria-hidden
        onClick={onSetIsBurgerActive}
      ></div>
    </div>
  );
};

Menu.propTypes = {
  isBurgerActive: propTypes.bool.isRequired,
  setIsBurgerActive: propTypes.func.isRequired,
};
