import React, { ReactElement, Dispatch, SetStateAction } from "react";
import { FixedSizeList } from "react-window";
import {
  ListItem,
  ListItemText,
  Box,
  Grid,
  CircularProgress,
  TextField,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { getStocksData } from "../../api/request";
import { Colors, ApplicationStyles, Metrics } from "../../theme";

const { center } = ApplicationStyles;

const useStyles = makeStyles({
  container: {
    width: "20%",
    height: "100%",
  },
  listContainer: {
    width: "100%",
  },
  selectedItemContainer: {
    backgroundColor: Colors.primary,
  },
  boxList: {
    width: "100%",
    padding: "15px",
  },
  itemContainer: {
    borderRadius: Metrics.defaultBorderRadius,
  },
  itemContainerSelected: {
    borderRadius: Metrics.defaultBorderRadius,
    backgroundColor: Colors.primary,
  },
  listItem: {
    width: "40%",
    ...center,
  },
  index: {
    width: "20%",
  },
});

interface StockListInterface {
  currentStock: string;
  setCurrentStock: Dispatch<SetStateAction<string>>;
}

const StockList: React.FC<StockListInterface> = ({
  setCurrentStock,
  currentStock,
}): ReactElement => {
  const classes = useStyles();
  const [stockData, setStockData] = React.useState([]);
  const [symbolSearch, setSymbolSearch] = React.useState("");
  const [isGettingData, setIsGettingData] = React.useState(false);

  function getData() {
    setIsGettingData(true);
    getStocksData(symbolSearch).then(({ bestMatches }) => {
      setStockData(bestMatches);
      setIsGettingData(false);
      console.log(bestMatches);
    });
  }

  function renderRow(props) {
    const { index, style } = props;
    return (
      <ListItem
        className={
          stockData[index]["1. symbol"] === currentStock
            ? classes.itemContainerSelected
            : classes.itemContainer
        }
        button
        onClick={() => {
          setCurrentStock(stockData[index]["1. symbol"]);
        }}
        style={style}
        key={index}>
        <ListItemText className={classes.index} primary={`${index}`} />
        <ListItemText
          className={classes.listItem}
          primary={`${stockData[index]["1. symbol"]}`}
        />
        <ListItemText
          className={classes.listItem}
          primary={`${stockData[index]["8. currency"]}`}
        />
      </ListItem>
    );
  }

  return (
    <div className={classes.container}>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <TextField
            id="input-with-icon-grid"
            label="Search stock..."
            onChange={(m) => {
              setSymbolSearch(m.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                getData();
              }
            }}
          />
        </Grid>
        <Grid item>{isGettingData ? <CircularProgress /> : <Search />}</Grid>
      </Grid>
      <Box
        className={classes.boxList}
        border={1.5}
        borderRadius={15}
        borderColor={Colors.lighterText}>
        <FixedSizeList
          className={classes.listContainer}
          height={500}
          itemSize={46}
          itemCount={stockData.length}>
          {renderRow}
        </FixedSizeList>
      </Box>
    </div>
  );
};

export default StockList;
