import adjustments from "../../../images/products-page/filter-procucts/adjustments.svg";

import "./filter-activate.scss";

export const FilterActivate = ({ onToggleFilter, filterActive }) => {
  return (
    <div
      className="filter-activate"
      onClick={onToggleFilter}
      data-test-id="filter-button"
      area-hidden
    >
      {!filterActive ? (
        <div className="open-filter">
          <img src={adjustments} alt="adjustments" />
          <span>Filter</span>
        </div>
      ) : (
        <div className="close-filter">
          <hr />
          <hr />
        </div>
      )}
    </div>
  );
};
