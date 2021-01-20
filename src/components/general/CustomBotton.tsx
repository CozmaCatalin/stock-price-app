import React, { ReactElement } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../theme";

type CustomBottonProps = {
  text: string;
};

const useStyles = makeStyles({
  root: {
    background: Colors.primary,
    border: 0,
    borderRadius: 15,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    fontWeight: "bold",
  },
});

const CustomBotton = ({ text }: CustomBottonProps): ReactElement => {
  const classes = useStyles();
  return <Button className={classes.root}>{text}</Button>;
};

export default CustomBotton;
