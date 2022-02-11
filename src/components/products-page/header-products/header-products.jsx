import shareSrc from "../../../images/share.svg";

import "./header-products.scss";

export const HeaderProducts = ({ typeCategories }) => {
  return (
    <div className="header-products">
      <div className="wrapper">
        <div className="header-product-nav">
          <div className="links">
            <span className="previous">Home</span>
            <span>►</span>
            <span className="previous categories">{typeCategories}</span>
          </div>
          <div className="share">
            <img src={shareSrc} alt="share" />
            <span className="share-text">Share</span>
          </div>
        </div>
        <div className="title">
          <span>{typeCategories}</span>
        </div>
      </div>
    </div>
  );
};
