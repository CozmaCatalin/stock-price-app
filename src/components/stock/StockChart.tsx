import React, { ReactElement, Fragment } from "react";
import {
  Box,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../theme";
import CandleStick from "./CandleStick";
import LineChart from "./LineChart";
import { getFinancialItem } from "../../api/request";

const useStyles = makeStyles({
  container: {
    width: "73%",
    height: "100%",
    // backgroundColor: "blue",
  },
});

const StockChart: React.FC = (): ReactElement => {
  const classes = useStyles();
  const [financialItem, setFinancialItem] = React.useState([]);
  const [typeOfChart, setTypeOfChart] = React.useState("line");

  const handleChartChange = (e: any) => {
    setTypeOfChart(e.target.value);
  };

  React.useEffect(() => {
    getFinancialItem("AAPL").then((response) => {
      setFinancialItem(response);
    });
  }, []);
  return (
    <Box className={classes.container} borderRadius={15}>
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
          <MenuItem value="line">
            <em>Line</em>
          </MenuItem>
          <MenuItem value="candlestick">CandleStick</MenuItem>
        </Select>
      </FormControl>
      <div>
        {typeOfChart === "line" ? (
          <LineChart
            color="green"
            financialItem={financialItem}
            financialItemName="AAPL"
          />
        ) : (
          <CandleStick financialItem={financialItem} financialItemName="AAPL" />
        )}
      </div>
    </Box>
  );
};

export default StockChart;
