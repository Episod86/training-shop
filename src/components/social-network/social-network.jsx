import { socialNetwork } from "../../constants/social-network";
import style from "./social-network.module.css";

export const SocialNetwork = ({ size }) => {
  return (
    <div className={style.socialNetwork}>
      {socialNetwork.map(({ key, href, imageSrc }) => (
        <a href={href} className={style.socialNetworkItem} key={key}>
          <img src={imageSrc} alt="logo" width={size} />
        </a>
      ))}
    </div>
  );
};