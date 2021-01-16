import React, { ReactElement } from "react";
import Menu from "./Menu";
import "../../assets/css/general/Page.css";

const Page: React.FC = ({ children }): ReactElement => {
  return (
    <div className="container-page">
      <Menu />
      <div className="content">{children}</div>
    </div>
  );
};

export default Page;
