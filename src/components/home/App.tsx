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
    width: "100%",
    height: "70%",
    marginTop: "3%",
    display: "flex",
    justifyContent: "space-around",
  },
});

const App: React.FC = (): ReactElement => {
  const classes = useStyles();
  const [currentStock, setCurrentStock] = React.useState("AAPL");
  return (
    <Page>
      <p className={classes.welcomeMessage}>Welcome to Stock Price App</p>
      <p className={classes.goodMorningMessage}>
        Good morning, Cozma Catalin !
      </p>
      <div className={classes.stockContainer}>
        <StockChart currentStock={currentStock} />
        <StockList
          setCurrentStock={setCurrentStock}
          currentStock={currentStock}
        />
      </div>
    </Page>
  );
};

export default App;
