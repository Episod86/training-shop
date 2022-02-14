import { Link } from "react-router-dom";
import { menu, usefulLinks } from "../../../constants/header";

import "./header-menu.scss";

export const HeaderMenu = () => {
  return (
    <div className="wrapper">
      <div className="header-menu">
        <Link to="/" className="header-logo" data-test-id="header-logo-link">
          CleverShop
        </Link>
        <div className="menu" data-test-id="menu">
          {menu.map(({ id, path, name }) => (
            <Link
              key={id}
              to={`/${path}`}
              className="menu-item"
              data-test-id={`menu-link-${path}`}
            >
              <span>{name}</span>
            </Link>
          ))}
        </div>
        <div className="useful-links">
          {usefulLinks.map(({ id, imageSrc, name }) => (
            <img src={imageSrc} alt={name} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};
