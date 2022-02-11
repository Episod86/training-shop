// import { MainPage } from "../../pages/main-page";
// import { ProductPage } from "../../pages/product-page/main-page";
// import { ProductPage } from "../../pages/product-page/product-page";
import { ProductsPage } from "../../pages/products-page";
import { Footer } from "../footer";
import { Header } from "../header";

import "./app.css";

export const App = () => {
  return (
    <div className="app" data-test-id="app">
      <Header />
      {/* <MainPage /> */}

      {/* <ProductPage /> */}
      {/* <ProductsPage typeCategories="women" /> */}
      <ProductsPage typeCategories="men" />

      <Footer />
    </div>
  );
};
