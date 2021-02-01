import React, { ReactElement } from "react";
import {
  Box,
  Select,
  FormControl,
  MenuItem,
  CircularProgress,
  ButtonGroup,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CandleStick from "./CandleStick";
import LineChart from "./LineChart";
import { getFinancialItem } from "../../api/request";
import { Colors, ApplicationStyles } from "../../theme";

const { center } = ApplicationStyles;

const useStyles = makeStyles((theme) => ({
  container: {
    width: "65%",
    height: "100%",
    padding: "20px 20px 0px 20px",
    backgroundColor: Colors.white,
  },
  topContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "100px",
    marginBottom: "20px",
  },
  formControl: {
    minWidth: 120,
    maxWidth: 100,
    padding: "0px 0px 0px 0px",
  },
  currentStock: {
    fontSize: "18px",
    padding: "0px 0px 0px 0px",
    margin: "0px 0px 0px 0px",
    color: Colors.darkGray,
  },
  enabledButton: {
    backgroundColor: Colors.primary,
  },
  disabledButton: {
    backgroundColor: Colors.white,
  },
  price: {
    margin: "0px 0px 0px 0px",
    padding: "0px 0px 0px 0px",
    fontSize: "25px",
    fontWeight: "bold",
    marginRight: "10px",
  },
  actionsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    height: "100%",
    justifyContent: "space-between",
  },
  titleContainer: {
    height: "100%",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "column",
  },
  text: {
    padding: "0px 0px 0px 0px",
    margin: "0px 0px 0px 0px",
  },
  priceContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: "10px",
  },
  infoStock: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  smallGrayText: {
    fontSize: "13px",
    margin: "0px 0px 0px 0px",
    padding: "0px 0px 0px 0px",
    color: Colors.darkGray,
  },
  smallBlackText: {
    fontSize: "12px",
    margin: "0px 0px 0px 0px",
    padding: "0px 0px 0px 0px",
    color: "black",
    marginRight: "8px",
  },
  infoContainer: {
    ...center,
    flexDirection: "row",
  },
}));

interface StockChartProps {
  currentStock: string;
}

const StockChart: React.FC<StockChartProps> = ({
  currentStock,
}): ReactElement => {
  const classes = useStyles();

  const [financialItem, setFinancialItem] = React.useState([]);
  const [typeOfChart, setTypeOfChart] = React.useState("candle");
  const [gettingStockData, setGettingStockDate] = React.useState(false);
  const [periodSelected, setPeriodSelected] = React.useState("Days");
  const [closePrice, setClosePrice] = React.useState(0);
  const [openPrice, setOpenPrice] = React.useState(0);
  const [highPrice, setHighPrice] = React.useState(0);
  const [lowPrice, setLowPrice] = React.useState(0);

  const handleChartChange = (e: any) => {
    setTypeOfChart(e.target.value);
  };

  React.useEffect(() => {
    setGettingStockDate(true);
    getFinancialItem(currentStock["1. symbol"], periodSelected).then(
      (response) => {
        setFinancialItem(response);
        setClosePrice(response.financialChartCloseValues[0]);
        setOpenPrice(response.financialChartOpenValues[0]);
        setHighPrice(response.financialChartHighValues[0]);
        setLowPrice(response.financialChartLowValues[0]);
        setGettingStockDate(false);
        console.log(response);
      }
    );
  }, [currentStock, periodSelected]);

  function customButton(type) {
    return (
      <Button
        className={
          periodSelected === type
            ? classes.enabledButton
            : classes.disabledButton
        }
        onClick={() => {
          setPeriodSelected(type);
        }}>
        {type}
      </Button>
    );
  }

  function info(type, value) {
    return (
      <div className={classes.infoContainer}>
        <p className={classes.smallBlackText}>{type}</p>
        <p className={classes.smallGrayText}>{value}</p>
      </div>
    );
  }
  return (
    <Box
      className={classes.container}
      borderRadius={15}
      border={1}
      borderColor={Colors.lighterText}>
      <div className={classes.topContainer}>
        {gettingStockData ? (
          <CircularProgress />
        ) : (
          <div className={classes.titleContainer}>
            <p className={classes.currentStock}>{currentStock["2. name"]}</p>
            <p className={classes.currentStock}>{currentStock["1. symbol"]}</p>
            <div className={classes.priceContainer}>
              <p className={classes.price}>{`${closePrice}`}</p>
              <p className={classes.currentStock}>
                {currentStock["8. currency"]}
              </p>
            </div>
            <p className={classes.smallGrayText}>
              {currentStock["5. marketOpen"]} - {currentStock["6. marketClose"]}{" "}
              {currentStock["7. timezone"]}
            </p>
          </div>
        )}
        <div className={classes.actionsContainer}>
          <ButtonGroup
            disableElevation
            size="small"
            aria-label="small outlined button group">
            {customButton("Days")}
            {customButton("Weeks")}
            {customButton("Monthly")}
          </ButtonGroup>
          <FormControl className={classes.formControl}>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={typeOfChart}
              onChange={handleChartChange}
              label="Age">
              <MenuItem value="line">Line</MenuItem>
              <MenuItem value="candle">Candle</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div>
        {typeOfChart === "line" ? (
          <LineChart
            color={Colors.primary}
            financialItem={financialItem}
            financialItemName={currentStock}
          />
        ) : (
          <CandleStick
            financialItem={financialItem}
            financialItemName={currentStock}
          />
        )}
      </div>
      <div className={classes.infoStock}>
        {info("Open", openPrice)}
        {info("High", highPrice)}
        {info("Low", lowPrice)}
        {info("Type", currentStock["3. type"])}
        {info("Region", currentStock["4. region"])}
      </div>
    </Box>
  );
};

export default StockChart;
