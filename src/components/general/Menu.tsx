import React, { ReactElement } from "react";
import "../../assets/css/general/Menu.css";
import CustomButton from "./CustomBotton";

const Menu: React.FC = (): ReactElement => {
  return (
    <div className="container-menu">
      <CustomButton text="INVEST" />
    </div>
  );
};

export default Menu;
