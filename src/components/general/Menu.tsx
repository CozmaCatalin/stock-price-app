import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ShowChart } from "@material-ui/icons";
import { Box } from "@material-ui/core";
import { Colors, ApplicationStyles } from "../../theme";

const { alignCenter } = ApplicationStyles;

const useStyles = makeStyles({
  container: {
    backgroundColor: Colors.container,
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
    marginLeft: "40px",
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
  timeContainer: {
    marginRight: "35px",
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column",
  },
  date: {
    ...ApplicationStyles.noMargin,
    ...ApplicationStyles.noPadding,
    fontSize: "13.5px",
    color: Colors.darkGray,
  },
  time: {
    fontSize: "25px",
    ...ApplicationStyles.noMargin,
    ...ApplicationStyles.noPadding,
  },
});

const Menu: React.FC = (): ReactElement => {
  const classes = useStyles();

  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");

  const getCurrentDate = (): string => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return `${mm}/${dd}/${yyyy}`;
  };

  const getCurrentTime = (): string => {
    const today = new Date();
    const hh = today.getHours();
    const mm = String(today.getMinutes()).padStart(2, "0");
    const ss = String(today.getSeconds()).padStart(2, "0");
    return `${hh}:${mm}:${ss}`;
  };

  React.useEffect(() => {
    const intervalDateTime = setInterval(() => {
      setDate(getCurrentDate());
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(intervalDateTime);
  }, []);
  return (
    <Box className={classes.container}>
      <div className={classes.titleContainer}>
        <ShowChart className={classes.dollarIcon} />
        <p className={classes.title}>Stock</p>
      </div>
      <div className={classes.timeContainer}>
        <p className={classes.time}>{time}</p>
        <p className={classes.date}>{date}</p>
      </div>
    </Box>
  );
};

export default Menu;
