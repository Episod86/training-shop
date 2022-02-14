import { TopBar } from "./top-bar";
import { HeaderMenu } from "./header-menu";

import "./header.scss";

export const Header = () => {
  return (
    <div className="header" data-test-id="header">
      <TopBar />
      <HeaderMenu />
    </div>
  );
};
