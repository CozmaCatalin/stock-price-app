import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Page, StockList, StockChart } from "../../components";
import { ApplicationStyles } from "../../theme";

const { center } = ApplicationStyles;

const useStyles = makeStyles({
  welcomeMessage: {
    fontWeight: "bold",
    fontSize: "25px",
    ...ApplicationStyles.noMargin,
    marginTop: "20px",
  },
  goodMorningMessage: {
    ...ApplicationStyles.noMargin,
    marginTop: "5px",
  },
  stockContainer: {
    flexDirection: "row",
    ...center,
    width: "100%",
    height: "50%",
    marginTop: "3%",
  },
});

const App: React.FC = (): ReactElement => {
  const classes = useStyles();
  return (
    <Page>
      <p className={classes.welcomeMessage}>Welcome to Stock Price App</p>
      <p className={classes.goodMorningMessage}>Good morning, Cozma Catalin!</p>
      <div className={classes.stockContainer}>
        <StockChart />
        <StockList />
      </div>
    </Page>
  );
};

export default App;
