import { MainBlog } from "../../components/main-page/main-blog";
import { MainNews } from "../../components/main-page/main-news/main-news";
import { MainSubscribe } from "../../components/main-page/main-subscribe";

export const MainPage = () => {
  return (
    <div>
      {/* <div className="wrapper">
        
      </div> */}
      <MainNews />
      <MainSubscribe />
      <div className="wrapper">
        <MainBlog />
      </div>
    </div>
  );
};
