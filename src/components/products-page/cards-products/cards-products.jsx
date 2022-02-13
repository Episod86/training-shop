import { cards } from "../../../constants/products";
import loadig from "../../../images/products-page/cards-products/Square-Loading.png";
import ratingSrc from "../../../images/products-page/cards-products/rating4.svg";
import "./cards-products.scss";

export const CardsProducts = ({ typeCategories }) => {
  return (
    <div className="cards-products">
      <div className="cards">
        {cards[typeCategories].map(({ key, title, price, imageSrc }) => (
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
      <div className="loading">
        <img src={loadig} alt="loadig" />
      </div>
    </div>
  );
};