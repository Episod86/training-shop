import "./filter-item.scss";

export const FilterItem = ({ text, type, onCheckProducts, min, max }) => {
  return (
    <label key={text} data-test-id={`filter-${type}-${text}`}>
      <input
        type="checkbox"
        id={text}
        onChange={(e) => onCheckProducts(e, type, min, max)}
      />
      <span>{text}</span>
    </label>
  );
};
