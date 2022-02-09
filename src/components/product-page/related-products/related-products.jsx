import { productItem } from "../../../constants/product";

import prevImg from "../../../images/product-page//button-prev.svg";
import nextImg from "../../../images/product-page/button-next.svg";
import ratingSrc from "../../../images/product-page/related-products/rating-img.svg";

import "./related-products.scss";

export const RelatedProducts = () => {
  return (
    <div className="related-products">
      <div className="related-products-title">
        <div className="title">RELATED PRODUCTS</div>
        <div className="navigation">
          <img src={prevImg} alt="prev" />
          <img src={nextImg} alt="next" />
        </div>
      </div>

      <div className="related-produts-items">
        {productItem.map(({ key, title, price, imageSrc }) => (
          <div className="item" key={key}>
            <img src={imageSrc} alt="photoProduct" />
            <div className="item-text">
              <div className="item-text-title">{title}</div>
              <div className="item-text-inform">
                <div className="item-text-price">{price}</div>
                <img src={ratingSrc} alt="rating" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
