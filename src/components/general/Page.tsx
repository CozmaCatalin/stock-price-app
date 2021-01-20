import React, { ReactElement } from "react";
import Button from "@material-ui/core/Button";
import Menu from "./Menu";
import useStyles from "../../assets/styles/general/Page";
import useWindowDimensions from "../../hooks/useWindowsDimensions";

const Page: React.FC = ({ children }): ReactElement => {
  const { height, width } = useWindowDimensions();
  const classes = useStyles();
  return (
    <div style={{ width, height }} className={classes.container}>
      <Menu />
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Page;
