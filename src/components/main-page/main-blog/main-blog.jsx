import { mainBlog } from "../../../constants/main";

import "./main-blog.scss";

export const MainBlog = () => {
  return (
    <div className="main-blog">
      <div className="blog-title">
        <div className="title">LATEST FROM BLOG</div>
        <div className="subtitle">SEE ALL</div>
      </div>

      <div className="content">
        {mainBlog.map(({ key, title, text, imageSrc, alt }) => (
          <div className="blog-item" key={key}>
            <img src={imageSrc} alt={alt} />
            <div className="blog-item-text">
              <div className="content-title">{title}</div>
              <div className="content-text">{text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
