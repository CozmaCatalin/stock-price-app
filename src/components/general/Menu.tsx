import React, { ReactElement } from "react";
import CustomButton from "./CustomBotton";
import useStyles from "../../assets/styles/general/Menu";

const Menu: React.FC = (): ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CustomButton text="INVEST" />
    </div>
  );
};

export default Menu;
