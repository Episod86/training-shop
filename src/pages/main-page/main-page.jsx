import { Advantage } from "../../components/main-page/advantage";
import { Clothes } from "../../components/main-page/clothes";
import { MainBlog } from "../../components/main-page/main-blog";
import { MainHeader } from "../../components/main-page/main-header";
import { MainNews } from "../../components/main-page/main-news/main-news";
import { MainSubscribe } from "../../components/main-page/main-subscribe";

export const MainPage = () => {
  return (
    <div>
      <div className="wrapper">
        <MainHeader />
        <Advantage />
        <Clothes productType="women" />
        <Clothes productType="men" />
        <MainNews />
      </div>

      <MainSubscribe />
      <div className="wrapper">
        <MainBlog />
      </div>
    </div>
  );
};
