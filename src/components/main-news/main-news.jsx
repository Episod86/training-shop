import { mainNews } from "../../constants/main";
import "./main-news.scss";

export const MainNews = () => {
  return (
    <div className="main-news">
      {mainNews.map(({ key, href, title, text, imageSrc, alt }) => (
        <a href={href} key={key} className="main-news-item">
          <img src={imageSrc} alt={alt} />
          <div className="main-news-text">
            <div className="news-title">{title}</div>
            <div className="news-text">{text}</div>
          </div>
        </a>
      ))}
    </div>
  );
};
