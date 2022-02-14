import "./main-news.scss";

export const MainNews = () => {
  return (
    <div className="main-news">
      <div className="new-season">
        <div className="text">
          <div className="title">New Season</div>
          <div className="subtitle">lookbook collection</div>
        </div>
      </div>
      <div className="sale">
        <div className="text">
          <div className="title">Sale</div>
          <div className="subtitle">
            Get UP to <span>50% off</span>
          </div>
        </div>
      </div>
    </div>
  );
};
