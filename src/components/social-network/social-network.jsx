import { socialNetwork } from "../../constants/social-network";
import "./social-network.scss";

export const SocialNetwork = ({ size }) => {
  return (
    <div className="social-network">
      {socialNetwork.map(({ key, href, imageSrc }) => (
        <a href={href} key={key}>
          <img src={imageSrc} alt="logo" width={size} />
        </a>
      ))}
    </div>
  );
};
