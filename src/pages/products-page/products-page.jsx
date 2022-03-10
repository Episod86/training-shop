import { useCallback, useEffect, useState } from "react";
import { CardsProducts } from "../../components/products-page/cards-products";
import { FilterProducts } from "../../components/products-page/filter-products";
import { HeaderProducts } from "../../components/products-page/header-products";

import { PRODUCTS } from "../../constants/products";

import "./products-page.scss";

export const ProductsPage = ({ productType }) => {
  const [filterActive, setFilterActive] = useState();

  const [filteredProducts, setFilteredProducts] = useState(
    PRODUCTS[productType]
  );
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);

  const includeColors = useCallback(
    (images) => {
      const filteredColors = images.filter((images) =>
        selectedColors.includes(images?.color)
      );
      if (filteredColors.length > 0) return true;
      return false;
    },
    [selectedColors]
  );

  const includeSizes = useCallback(
    (sizes) => {
      const filteredSizes = sizes.filter((size) =>
        selectedSizes.includes(size)
      );
      if (filteredSizes.length > 0) return true;
      return false;
    },
    [selectedSizes]
  );

  const includePrices = useCallback(
    (price) => {
      const filteredPrices = selectedPrices.filter(
        (selectedPrice) =>
          selectedPrice.min <= price && selectedPrice.max >= price
      );
      if (filteredPrices.length > 0) return true;
      return false;
    },
    [selectedPrices]
  );

  const onCheckProducts = (e, type, min, max) => {
    switch (type) {
      case "color":
        if (selectedColors.includes(e.target.id)) {
          setSelectedColors(
            selectedColors.filter((color) => color !== e.target.id)
          );
        } else {
          setSelectedColors([...selectedColors, e.target.id]);
        }
        break;
      case "sizes":
        if (selectedSizes.includes(e.target.id)) {
          setSelectedSizes(
            selectedSizes.filter((size) => size !== e.target.id)
          );
        } else {
          setSelectedSizes([...selectedSizes, e.target.id]);
        }
        break;
      case "brand":
        if (selectedBrands.includes(e.target.id)) {
          setSelectedBrands(
            selectedBrands.filter((brand) => brand !== e.target.id)
          );
        } else {
          setSelectedBrands([...selectedBrands, e.target.id]);
        }
        break;
      case "price":
        if (selectedPrices.find((price) => price?.min === min)) {
          setSelectedPrices(
            selectedPrices.filter((price) => price.min !== min)
          );
        } else {
          setSelectedPrices([...selectedPrices, { min, max }]);
        }
        break;

      default:
        console.log("неудачный поиск");
    }
  };
  const onToggleFilter = () => {
    setFilterActive(!filterActive);
  };

  useEffect(() => {
    const filteredProductsArr = PRODUCTS[productType].filter(
      (product) =>
        (!selectedColors.length || includeColors(product.images)) &&
        (!selectedSizes.length || includeSizes(product.sizes)) &&
        (!selectedBrands.length || selectedBrands.includes(product.brand)) &&
        (!selectedPrices.length || includePrices(product.price))
    );
    setFilteredProducts(filteredProductsArr);
  }, [
    selectedColors,
    selectedSizes,
    selectedBrands,
    selectedPrices,
    includeColors,
    includeSizes,
    includePrices,
    productType,
  ]);

  useEffect(() => {
    setSelectedColors([]);
    setSelectedSizes([]);
    setSelectedBrands([]);
    setSelectedPrices([]);
    setFilterActive(false);
  }, [productType]);

  return (
    <div data-test-id={`products-page-${productType}`}>
      <HeaderProducts productType={productType} />
      <div className="wrapper">
        <FilterProducts
          productType={productType}
          onCheckProducts={onCheckProducts}
          filteredProducts={filteredProducts}
          onToggleFilter={onToggleFilter}
          filterActive={filterActive}
        />

        {(selectedColors.length ||
          selectedSizes.length ||
          selectedBrands.length ||
          selectedPrices.length) > 0 && (
          <div className="filter-seach-result">
            <div>{filteredProducts.length} items found</div>
            <div>
              Colors:
              {selectedColors.map((selectedColor) => (
                <span> {selectedColor} </span>
              ))}
            </div>
            <div>
              Sizes:
              {selectedSizes.map((selectedSize) => (
                <span> {selectedSize} </span>
              ))}
            </div>
            <div>
              Brands:
              {selectedBrands.map((selectedBrand) => (
                <span> {selectedBrand} </span>
              ))}
            </div>
            <div>
              Prices:
              {selectedPrices.map((selectedPrice) => (
                <span>
                  $ {selectedPrice.min} - {selectedPrice.max}
                </span>
              ))}
            </div>
          </div>
        )}
        <CardsProducts
          selectedColors={selectedColors}
          productType={productType}
          filteredProducts={filteredProducts}
        />
      </div>
    </div>
  );
};
