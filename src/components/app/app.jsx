import { MainPage } from "../../pages/main-page";
import { Route, Switch } from "react-router-dom";
import { ProductPage } from "../../pages/product-page";
import { ProductsPage } from "../../pages/products-page";
import { Footer } from "../footer";
import { Header } from "../header";

import "./app.css";

export const App = () => {
  return (
    <div className="app" data-test-id="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/women">
          <ProductsPage typeCategories="women" />
        </Route>
        <Route exact path="/men">
          <ProductsPage typeCategories="men" />
        </Route>
        <Route path="/women/:id">
          <ProductPage />
        </Route>
        <Route path="/men/:id">
          <ProductPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};
