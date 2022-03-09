import adjustments from "./images/adjustments.svg";
import close from "./images/close.svg";

import "./filter-activate.scss";

export const FilterActivate = ({ onToggleFilter, filterActive }) => {
  return (
    <button
      className="filter-activate"
      onClick={onToggleFilter}
      data-test-id="filter-button"
    >
      {!filterActive ? (
        <img src={adjustments} alt="adjustments" />
      ) : (
        <img src={close} alt="close" className="close" />
      )}
      Filter
    </button>
  );
};
