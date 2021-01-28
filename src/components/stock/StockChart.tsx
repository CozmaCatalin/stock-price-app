import React, { ReactElement } from "react";
import {
  Box,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CandleStick from "./CandleStick";
import LineChart from "./LineChart";
import { getFinancialItem } from "../../api/request";
import { Colors, ApplicationStyles } from "../../theme";

const { alignCenter } = ApplicationStyles;

const useStyles = makeStyles({
  container: {
    width: "73%",
    height: "100%",
  },
  topContainer: {
    ...alignCenter,
    flexDirection: "row",
    alignItems: "flex-end",
  },
});

interface StockChartProps {
  currentStock: string;
}

const StockChart: React.FC<StockChartProps> = ({
  currentStock,
}): ReactElement => {
  const classes = useStyles();

  const [financialItem, setFinancialItem] = React.useState([]);
  const [typeOfChart, setTypeOfChart] = React.useState("line");
  const [gettingStockData, setGettingStockDate] = React.useState(false);
  const handleChartChange = (e: any) => {
    setTypeOfChart(e.target.value);
  };

  React.useEffect(() => {
    setGettingStockDate(true);
    getFinancialItem(currentStock).then((response) => {
      setFinancialItem(response);
      console.log(response);
      console.log("request made !");
      setGettingStockDate(false);
    });
  }, [currentStock]);
  return (
    <Box className={classes.container} borderRadius={15}>
      <div className={classes.topContainer}>
        <FormControl id="stock-type-of-chart-form-control">
          <InputLabel shrink id="type-of-chart-select-label">
            Type
          </InputLabel>
          <Select
            labelId="type-of-chart-select-label"
            id="type-of-chart-select"
            value={typeOfChart}
            onChange={handleChartChange}
            displayEmpty>
            <MenuItem value="line">Line</MenuItem>
            <MenuItem value="candlestick">CandleStick</MenuItem>
          </Select>
        </FormControl>
        <p>{currentStock}</p>
        {gettingStockData ? <CircularProgress /> : null}
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
    </Box>
  );
};

export default StockChart;
