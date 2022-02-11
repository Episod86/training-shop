import adjustments from "../../../images/products-page/filter-procucts/adjustments.svg";
import list from "../../../images/products-page/filter-procucts/view-list.svg";
import grid from "../../../images/products-page/filter-procucts/view-grid.svg";

import "./filter-products.scss";

export const FilterProducts = () => {
  return (
    <div className="filter-products">
      <div className="filter">
        <img src={adjustments} alt="adjustments" />
        <span>Filter</span>
      </div>
      <div className="grid">
        <img src={list} alt="list" />
        <img src={grid} alt="grid" />
      </div>
    </div>
  );
};
