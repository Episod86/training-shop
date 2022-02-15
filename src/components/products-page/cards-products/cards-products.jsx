import { cards } from "../../../constants/products";
import loadig from "../../../images/products-page/cards-products/Square-Loading.png";
import ratingSrc from "../../../images/products-page/cards-products/rating4.svg";
import "./cards-products.scss";
import { Link } from "react-router-dom";

export const CardsProducts = ({ productType }) => {
  return (
    <div className="cards-products">
      <div className="cards">
        {cards[productType].map(({ id, title, price, imageSrc }) => (
          <Link to={`/${productType}/${id}`} className="item" key={id}>
            <img src={imageSrc} alt="photoProduct" />
            <div className="item-text">
              <div className="item-text-title">{title}</div>
              <div className="item-text-inform">
                <div className="item-text-price">{price}</div>
                <img src={ratingSrc} alt="rating" />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="loading">
        <img src={loadig} alt="loadig" />
      </div>
    </div>
  );
};
