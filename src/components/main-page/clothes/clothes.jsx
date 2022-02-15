import { Link } from "react-router-dom";
import { clothesMenu } from "../../../constants/main";
import { cards } from "../../../constants/products";
import ratingSrc from "../../../images/products-page/cards-products/rating4.svg";
import "./clothes.scss";

export const Clothes = ({ productType }) => {
  return (
    <div className="clothes" data-test-id={`clothes-${productType}`}>
      <div className="clothes-header">
        <div className="title">{`${productType}'s`}</div>
        <div className="menu">
          {clothesMenu.map(({ id, name }) => (
            <a href="!#" className="item" key={id}>
              {name}
            </a>
          ))}
        </div>
      </div>
      <div
        className="clothes-cards"
        data-test-id={`clothes-cards-${productType}`}
      >
        {cards[productType].map(({ id, title, price, imageSrc }) => (
          <Link
            to={`/${productType}/${id}`}
            className="item"
            key={id}
            data-test-id={`clothes-card-${productType}`}
          >
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
      <Link to={`/${productType}`} className="cards-link">
        <button className="button" type="button">
          See All
        </button>
      </Link>
    </div>
  );
};
