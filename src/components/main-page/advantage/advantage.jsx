import { advantage } from "../../../constants/main";
import "./advantage.scss";

export const Advantage = () => {
  return (
    <div className="advantage">
      {advantage.map(({ key, title, text, imageSrc, alt }) => (
        <div className="advantage-item" key={key}>
          <img src={imageSrc} alt={alt} />
          <div className="advantage-item-text">
            <div className="advantage-title">{title}</div>
            <div className="advantage-text">{text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
