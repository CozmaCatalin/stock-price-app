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
import { FormatListBulleted } from "@material-ui/icons";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { getStocksData } from "../../api/request";
import { Colors, ApplicationStyles, Metrics } from "../../theme";
import { Dialog } from "../../components";
import useWindowDimensions from "../../hooks/useWindowsDimensions";

const { center, alignCenter } = ApplicationStyles;

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: Colors.primary,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: Colors.lighterText,
      },
      "&:hover fieldset": {
        borderColor: Colors.mediumText,
      },
      "&.Mui-focused fieldset": {
        borderColor: Colors.primary,
      },
    },
  },
})(TextField);

const useStyles = makeStyles({
  desktopContainer: {
    width: "20%",
    display: "flex",
    flexDirection: "column",
    padding: "20px 20px 10px 20px",
    backgroundColor: Colors.white,
    alignItems: "center",
  },
  mobileContainer: {
    width: "90%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "20px 20px 20px 20px",
    backgroundColor: Colors.white,
    alignItems: "center",
    marginTop: "2%",
  },
  listContainer: {
    width: "100%",
  },
  selectedItemContainer: {
    backgroundColor: Colors.primary,
  },
  boxList: {
    width: "100%",
    marginTop: "15px",
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
    justifyContent: "flex-start",
  },
  index: {
    width: "40%",
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  textInput: {
    marginRight: "10px",
  },
  symbolsTitle: {
    fontSize: "25px",
    ...ApplicationStyles.noMargin,
    ...ApplicationStyles.noPadding,
  },
  titleContainer: {
    width: "100%",
    marginBottom: "15px",
    ...alignCenter,
    flexDirection: "row",
  },
  listIcon: {
    color: Colors.darkText,
    fontSize: "25px",
    marginLeft: "10px",
  },
  circular: {
    color: Colors.primary,
    marginLeft: "20px",
  },
});

interface StockListInterface {
  currentStock: string;
  setCurrentStock: Dispatch<SetStateAction<ISymbol>>;
  desktop: boolean;
}

const StockList: React.FC<StockListInterface> = ({
  setCurrentStock,
  currentStock,
  desktop,
}): ReactElement => {
  const classes = useStyles();
  const [stockData, setStockData] = React.useState([]);
  const [symbolSearch, setSymbolSearch] = React.useState("IBM");
  const [isGettingData, setIsGettingData] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const [content, setContent] = React.useState("");
  const size = useWindowDimensions();

  function getData() {
    setIsGettingData(true);
    getStocksData(symbolSearch).then((data: ISymbols) => {
      if (data.bestMatches) {
        setStockData(data.bestMatches);
        setIsGettingData(false);
      } else {
        // eslint-disable-next-line no-alert
        setIsGettingData(false);
        setModal(true);
        setContent(data.Note);
      }
    });
  }

  React.useEffect(() => {
    getData();
  }, []);

  function renderRow(props) {
    const { index, style } = props;
    const name = stockData[index]["2. name"];
    return (
      <ListItem
        className={
          stockData[index]["1. symbol"] === currentStock
            ? classes.itemContainerSelected
            : classes.itemContainer
        }
        button
        onClick={() => {
          setCurrentStock(stockData[index]);
        }}
        style={style}
        key={index}>
        <ListItemText
          className={classes.index}
          primary={`${index + 1}. ${stockData[index]["1. symbol"]}`}
        />
        <ListItemText
          className={classes.listItem}
          primary={
            name.length > 10
              ? `${name.substring(0, desktop ? 10 : 35)}...`
              : `${name}`
          }
        />
      </ListItem>
    );
  }

  return (
    <Box
      boxShadow={1}
      borderRadius={10}
      className={desktop ? classes.desktopContainer : classes.mobileContainer}
      borderColor={Colors.lighterText}>
      <div className={classes.titleContainer}>
        <p className={classes.symbolsTitle}>Symbols List</p>
        <FormatListBulleted className={classes.listIcon} />
      </div>
      <Grid className={classes.searchContainer}>
        <Grid item>
          <CssTextField
            className={classes.textInput}
            size="small"
            variant="outlined"
            id="input-with-icon-grid"
            label="Search by name..."
            value={symbolSearch}
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
        <Grid item>
          {isGettingData ? (
            <CircularProgress className={classes.circular} />
          ) : null}
        </Grid>
      </Grid>
      <Box
        className={classes.boxList}
        border={0}
        borderRadius={15}
        borderColor={Colors.lighterText}>
        <FixedSizeList
          className={classes.listContainer}
          height={size.height * 0.55}
          itemSize={45}
          itemCount={stockData.length}>
          {renderRow}
        </FixedSizeList>
      </Box>
      <Dialog
        title="Something went wrong..."
        opened={modal}
        setOpened={setModal}
        content={content}
      />
    </Box>
  );
};

export default StockList;
