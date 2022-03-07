import { useParams } from "react-router-dom";
import { CardProduct } from "../../components/product-page/card-product";
import { HeaderProduct } from "../../components/product-page/header-product";
import { RelatedProducts } from "../../components/product-page/related-products";

import { PRODUCTS } from "../../constants/products";

export const ProductPage = ({ productType }) => {
  const { id } = useParams();

  const product = PRODUCTS[productType].find((item) => item?.id === id);

  return (
    <div data-test-id={`product-page-${productType}`}>
      <HeaderProduct
        productType={productType}
        name={product.name}
        rating={product.rating}
      />
      <div className="wrapper">
        <CardProduct product={product} />
        <RelatedProducts productType={productType} />
      </div>
    </div>
  );
};
