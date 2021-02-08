/* eslint-disable react/jsx-curly-brace-presence */
import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Page, StockList, StockChart, Responsive } from "../../components";
import { ApplicationStyles, Colors } from "../../theme";

const { Desktop } = Responsive;

const { noMargin, noPadding } = ApplicationStyles;
const defaultStock: ISymbol = {
  "1. symbol": "IBMK",
  "2. name": "BTC iShares iBonds Dec 2022 Term Muni Bond ETF",
  "3. type": "ETF",
  "4. region": "United States",
  "5. marketOpen": "09:30",
  "6. marketClose": "16:00",
  "7. timezone": "UTC-05",
  "8. currency": "USD",
  "9. matchScore": "0.8571",
};

const useStyles = makeStyles({
  stockContainer: {
    flexDirection: "row",
    width: "100%",
    height: "87%",
    marginTop: "2%",
    display: "flex",
    justifyContent: "space-around",
  },
  message: {
    fontSize: "25px",
    ...noMargin,
    ...noPadding,
  },
  secondMessage: {
    fontSize: "13px",
    ...noMargin,
    ...noPadding,
    color: Colors.darkGray,
  },
  messageContainer: {
    flexDirection: "column",
    display: "flex",
    marginLeft: "40px",
    justifyContent: "flex-end",
    height: "55px",
  },
});

const App: React.FC = (): ReactElement => {
  const classes = useStyles();
  const [currentStock, setCurrentStock] = React.useState<ISymbol>(defaultStock);
  const [time, setCurrentTime] = React.useState("");
  React.useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12 && hour > 5) {
      setCurrentTime("Morning");
    }
    if (hour > 12 && hour < 17) {
      setCurrentTime("Afternoon");
    }
    if (hour > 17) {
      setCurrentTime("Evening");
    }
  }, []);
  return (
    <Page>
      <Desktop>
        <div className={classes.messageContainer}>
          <p className={classes.message}>{`Good ${time}!`}</p>
          <p
            className={classes.secondMessage}>{`Let's analyze some symbols`}</p>
        </div>
        <div className={classes.stockContainer}>
          <StockChart currentStock={currentStock} />
          <StockList
            setCurrentStock={setCurrentStock}
            currentStock={currentStock["1. symbol"]}
          />
        </div>
      </Desktop>
    </Page>
  );
};

export default App;
