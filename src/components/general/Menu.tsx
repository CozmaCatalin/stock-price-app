import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AttachMoney, Dashboard, Search } from "@material-ui/icons";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import CustomButton from "./CustomBotton";
import { Colors, ApplicationStyles, Metrics } from "../../theme";

const { alignCenter, center } = ApplicationStyles;
const { defaultBorderRadius } = Metrics;

const useStyles = makeStyles({
  container: {
    backgroundColor: Colors.menuBackground,
    width: "18%",
    flexDirection: "column",
    display: "flex",
    justifyContent: "space-between",
  },
  titleContainer: {
    ...alignCenter,
    flexDirection: "row",
    width: "100%",
    marginLeft: "20px",
  },
  listContainer: {
    flexDirection: "column",
  },
  listItemContainer: {
    width: "100%",
    padding: "10px 25px 10px 25px",
    color: Colors.mediumText,
    marginBottom: "5%",
    fontWeight: "bold",
  },
  icons: {
    color: Colors.mediumText,
    fontSize: "20px",
  },
  dollarIcon: {
    backgroundColor: Colors.ultraOpacityPrimary,
    borderRadius: 20,
    padding: "5px",
    color: Colors.primary,
    marginRight: "5%",
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
    <div className={classes.container}>
      <div>
        <div className={classes.titleContainer}>
          <AttachMoney className={classes.dollarIcon} />
          <p className={classes.title}>Stock</p>
        </div>
        <List className={classes.listContainer} component="nav">
          <ListItem button className={classes.listItemContainer}>
            <ListItemIcon>
              <Dashboard className={classes.icons} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button className={classes.listItemContainer}>
            <ListItemIcon>
              <Search className={classes.icons} />
            </ListItemIcon>
            <ListItemText primary="Search" />
          </ListItem>
        </List>
      </div>
      <div>
        <p>Cozma Catalin</p>
      </div>
    </div>
  );
};

export default Menu;
