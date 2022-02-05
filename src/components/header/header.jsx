import style from "./header.module.css";
import { TopBar } from "./top-bar";

export const Header = () => {
  return (
    <div className={style.header} data-test-id="header">
      <TopBar />
    </div>
  );
};
