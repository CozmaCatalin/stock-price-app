import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AttachMoney, Search } from "@material-ui/icons";
import { Grid, TextField } from "@material-ui/core";
import { Colors, ApplicationStyles, Metrics } from "../../theme";

const { alignCenter, center } = ApplicationStyles;
const { defaultBorderRadius } = Metrics;

const useStyles = makeStyles({
  container: {
    backgroundColor: Colors.menuBackground,
    width: "100%",
    flexDirection: "row",
    height: 60,
    ...alignCenter,
    justifyContent: "space-between",
  },
  titleContainer: {
    ...alignCenter,
    flexDirection: "row",
    marginLeft: "20px",
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
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <AttachMoney className={classes.dollarIcon} />
        <p className={classes.title}>Stock</p>
      </div>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <Search />
        </Grid>
        <Grid item>
          <TextField
            id="input-with-icon-grid"
            label="Search stock..."
            onChange={(m) => {
              console.log(m.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                console.log("enter");
              }
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Menu;
