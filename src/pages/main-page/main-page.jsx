import { MainBlog } from "../../components/main-page/main-blog";
import { MainNews } from "../../components/main-news";
import { MainSubscribe } from "../../components/main-page/main-subscribe";

export const MainPage = () => {
  return (
    <div className="wrapper">
      <MainNews />
      <MainSubscribe />
      <MainBlog />
    </div>
  );
};
