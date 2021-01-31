import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Page, StockList, StockChart } from "../../components";
import { ApplicationStyles } from "../../theme";

const { center } = ApplicationStyles;

const useStyles = makeStyles({
  stockContainer: {
    flexDirection: "row",
    width: "100%",
    height: "95%",
    marginTop: "2%",
    display: "flex",
    justifyContent: "space-around",
  },
});

const App: React.FC = (): ReactElement => {
  const classes = useStyles();
  const [currentStock, setCurrentStock] = React.useState("AAPL");
  return (
    <Page>
      <div className={classes.stockContainer}>
        <StockChart currentStock={currentStock} />
        <StockList
          setCurrentStock={setCurrentStock}
          currentStock={currentStock["1. symbol"]}
        />
      </div>
    </Page>
  );
};

export default App;
