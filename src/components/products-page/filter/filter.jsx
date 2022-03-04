import { PRODUCTS } from "../../../constants/products";
import { FilterPrice } from "../../../constants/filter-price";

import "./filter.scss";

export const Filter = ({ productType }) => {
  const giveUniqueColor = () =>
    PRODUCTS[productType].reduce(
      (acc, product) =>
        Array.from(
          new Set([...acc, ...product.images.map((image) => image.color)])
        ),
      []
    );
  const giveUniqueSize = () =>
    PRODUCTS[productType].reduce(
      (acc, product) => Array.from(new Set([...acc, ...product.sizes])),
      []
    );
  const giveUniqueBrand = () =>
    Array.from(new Set(PRODUCTS[productType].map((product) => product.brand)));

  return (
    <div className="filter">
      <div className="color">
        <div className="title">COLOR</div>
        <div className="filters">
          {giveUniqueColor().map((color) => (
            <label>
              <input type="checkbox" />
              <span>{color}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="size">
        <div className="title">SIZE</div>
        <div className="filters">
          {giveUniqueSize().map((sizes) => (
            <label>
              <input type="checkbox" />
              <span>{sizes}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="brand">
        <div className="title">BRAND</div>
        <div className="filters">
          {giveUniqueBrand().map((brand) => (
            <label>
              <input type="checkbox" />
              <span>{brand}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="price">
        <div className="title">PRICE</div>
        <div className="filters">
          {FilterPrice.map(({ price }) => (
            <label>
              <input type="checkbox" />
              <span>{price}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
