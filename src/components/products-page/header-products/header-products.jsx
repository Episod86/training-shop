import { Link } from "react-router-dom";

import shareSrc from "../../../images/share.svg";

import "./header-products.scss";

export const HeaderProducts = ({ productType }) => {
  return (
    <div className="header-products">
      <div className="wrapper">
        <div className="header-product-nav">
          <div className="links">
            <Link to={`/`} className="previous">
              Home
            </Link>
            <span>►</span>
            <Link to={`/${productType}/`} className="previous categories">
              {productType}
            </Link>
          </div>
          <div className="share">
            <img src={shareSrc} alt="share" />
            <span className="share-text">Share</span>
          </div>
        </div>
        <div className="title">
          <span>{productType}</span>
        </div>
      </div>
    </div>
  );
};
