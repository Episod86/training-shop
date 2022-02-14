import women from "../../../images/main/subscribe/women.png";
import men from "../../../images/main/subscribe/men.png";
import "./main-subscribe.scss";

export const MainSubscribe = () => {
  return (
    <div className="main-subscribe">
      <div className="subscribe-block">
        <div className="block">
          <div className="title">Special Offer</div>
          <div className="subtitle">
            Subscribe <br />
            And <span>Get 10% Off</span>
          </div>
          <input className="input" type="text" placeholder="Enter your email" />
          <button className="button" type="button">
            Subscribe
          </button>
        </div>
        <img src={women} alt="women" className="women" />
        <img src={men} alt="men" className="men" />
      </div>
    </div>
  );
};
