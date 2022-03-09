import { useState } from "react";

import { Filter } from "../filter";
import { FilterActivate } from "../filter-activate";

import list from "../../../images/products-page/filter-procucts/view-list.svg";
import grid from "../../../images/products-page/filter-procucts/view-grid.svg";

import "./filter-products.scss";

export const FilterProducts = ({ productType, onCheckProducts }) => {
  const [filterActive, setFilterActive] = useState(false);

  const onToggleFilter = () => {
    setFilterActive(!filterActive);
  };

  return (
    <div className="filter-products">
      <div className="filter-setting">
        <FilterActivate
          onToggleFilter={onToggleFilter}
          filterActive={filterActive}
        />
        <div className="grid">
          <img src={list} alt="list" />
          <img src={grid} alt="grid" />
        </div>
      </div>
      {filterActive && (
        <Filter
          productType={productType}
          filterActive={filterActive}
          onCheckProducts={onCheckProducts}
        />
      )}
    </div>
  );
};
