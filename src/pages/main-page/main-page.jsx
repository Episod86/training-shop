import { MainBlog } from "../../components/main-blog";
import { MainNews } from "../../components/main-news";

export const MainPage = () => {
  return (
    <div className="wrapper">
      <MainNews />
      <MainBlog />
    </div>
  );
};
