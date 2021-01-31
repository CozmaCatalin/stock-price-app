import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AttachMoney } from "@material-ui/icons";
import { Box } from "@material-ui/core";
import { Colors, ApplicationStyles, Metrics } from "../../theme";

const { alignCenter, center } = ApplicationStyles;
const { defaultBorderRadius } = Metrics;

const useStyles = makeStyles({
  container: {
    backgroundColor: Colors.white,
    width: "100%",
    flexDirection: "row",
    height: 60,
    ...alignCenter,
    justifyContent: "space-between",
    borderBottomWidth: 1,
  },
  titleContainer: {
    ...alignCenter,
    flexDirection: "row",
    marginLeft: "30px",
    width: "500%",
  },
  dollarIcon: {
    backgroundColor: Colors.ultraOpacityPrimary,
    borderRadius: 20,
    padding: "5px",
    color: Colors.primary,
    marginRight: "15px",
    fontSize: "25px",
  },
  title: {
    fontWeight: "bolder",
    fontSize: "25px",
  },
});

const Menu: React.FC = (): ReactElement => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <div className={classes.titleContainer}>
        <AttachMoney className={classes.dollarIcon} />
        <p className={classes.title}>Stock</p>
      </div>
    </Box>
  );
};

export default Menu;
