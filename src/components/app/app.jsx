// import { MainPage } from "../../pages/main-page";
import { ProductPage } from "../../pages/product-page/main-page";
import { Footer } from "../footer";
import { Header } from "../header";

import "./app.css";

export const App = () => {
  return (
    <div className="app" data-test-id="app">
      <Header />
      {/* <MainPage /> */}

      <ProductPage />
      <Footer />
    </div>
  );
};
