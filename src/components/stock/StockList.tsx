import React, { ReactElement } from "react";
import { FixedSizeList } from "react-window";
import { ListItem, ListItemText, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Colors, ApplicationStyles } from "../../theme";

const { center } = ApplicationStyles;

const data = [
  {
    currency: "USD",
    description: "PHOSPHATE HOLDINGS INC",
    displaySymbol: "PHOS",
    figi: "BBG000RK65P0",
    mic: "OTCM",
    symbol: "PHOS",
    type: "Common Stock",
  },
  {
    currency: "USD",
    description: "PLX PHARMA INC",
    displaySymbol: "PLXP",
    figi: "BBG005ZBTNB1",
    mic: "XNCM",
    symbol: "PLXP",
    type: "Common Stock",
  },
  {
    currency: "USD",
    description: "KOBAYASHI PHARMACEUTICAL CO",
    displaySymbol: "KBYPF",
    figi: "BBG000DRSZN2",
    mic: "OOTC",
    symbol: "KBYPF",
    type: "Common Stock",
  },
  {
    currency: "USD",
    description: "CYRELA BRAZIL REALTY-SPO ADR",
    displaySymbol: "CYRBY",
    figi: "BBG000L9YW08",
    mic: "OTCM",
    symbol: "CYRBY",
    type: "ADR",
  },
  {
    currency: "USD",
    description: "OZOP SURGICAL CORP",
    displaySymbol: "OZSC",
    figi: "BBG00DRMBR38",
    mic: "OTCM",
    symbol: "OZSC",
    type: "Common Stock",
  },
  {
    currency: "USD",
    description:
      "Bluescape Opportunities Acquisition Corp. Units, each consisting of one Class A ordinary share, and one-half of one redeemable warrant",
    displaySymbol: "BOAC=",
    figi: "",
    mic: "XNYS",
    symbol: "BOAC=",
    type: "",
  },
  {
    currency: "USD",
    description: "MEGA MANUNGGAL PROPERTY TBK",
    displaySymbol: "MGMGF",
    figi: "BBG00XGJ84T0",
    mic: "OTCM",
    symbol: "MGMGF",
    type: "Common Stock",
  },
  {
    currency: "USD",
    description: "BIG LOTS INC",
    displaySymbol: "BIG",
    figi: "BBG000J0DCQ9",
    mic: "XNYS",
    symbol: "BIG",
    type: "Common Stock",
  },
  {
    currency: "USD",
    description: "AIR PARTNER PLC",
    displaySymbol: "ARLCF",
    figi: "BBG00NHX6F26",
    mic: "OOTC",
    symbol: "ARLCF",
    type: "Common Stock",
  },
  {
    currency: "USD",
    description: "MV OIL TRUST",
    displaySymbol: "MVO",
    figi: "BBG000C0DQR4",
    mic: "XNYS",
    symbol: "MVO",
    type: "Royalty Trst",
  },
  {
    currency: "USD",
    description: "MAGELLAN HEALTH INC",
    displaySymbol: "MGLN",
    figi: "BBG000BD6QL1",
    mic: "XNGS",
    symbol: "MGLN",
    type: "Common Stock",
  },
  {
    currency: "USD",
    description: "BAHAMAS PETROLEUM CO PLC",
    displaySymbol: "BSHPF",
    figi: "BBG0017TB4W0",
    mic: "OOTC",
    symbol: "BSHPF",
    type: "Common Stock",
  },
  {
    currency: "USD",
    description: "FIRST TRUST HEALTH CARE ALPH",
    displaySymbol: "FXH",
    figi: "BBG000R6BXR2",
    mic: "ARCX",
    symbol: "FXH",
    type: "ETP",
  },
  {
    currency: "USD",
    description: "FERROVIAL SA",
    displaySymbol: "FRRVF",
    figi: "BBG0016Q2L68",
    mic: "OOTC",
    symbol: "FRRVF",
    type: "Common Stock",
  },
  {
    currency: "USD",
    description: "ISHARES ESG ADV MSCI EM ETF",
    displaySymbol: "EMXF",
    figi: "BBG00XR16BK2",
    mic: "XNMS",
    symbol: "EMXF",
    type: "ETP",
  },
  {
    currency: "USD",
    description: "INDEPENDENCE GROUP-SPON ADR",
    displaySymbol: "IIDDY",
    figi: "BBG00HTVKPG7",
    mic: "OOTC",
    symbol: "IIDDY",
    type: "ADR",
  },
  {
    currency: "USD",
    description: "YINGDE GASES GROUP CO LTD",
    displaySymbol: "YNGDF",
    figi: "BBG002CV4N71",
    mic: "OTCM",
    symbol: "YNGDF",
    type: "Common Stock",
  },
  {
    currency: "USD",
    description: "DACOTAH BANKS INC",
    displaySymbol: "DBIN",
    figi: "BBG000BBGNT3",
    mic: "OTCM",
    symbol: "DBIN",
    type: "Common Stock",
  },
  {
    currency: "USD",
    description: "NIU TECHNOLOGIES-SPONS ADR",
    displaySymbol: "NIU",
    figi: "BBG00M37BSB6",
    mic: "XNMS",
    symbol: "NIU",
    type: "ADR",
  },
  {
    currency: "USD",
    description: "STAR NUTRITION INC",
    displaySymbol: "STAU",
    figi: "BBG000CZ1RL4",
    mic: "OTCM",
    symbol: "STAU",
    type: "Common Stock",
  },
  {
    currency: "USD",
    description: "ACNB CORP",
    displaySymbol: "ACNB",
    figi: "BBG000BJ2TV5",
    mic: "XNCM",
    symbol: "ACNB",
    type: "Common Stock",
  },
  {
    currency: "USD",
    description: "BEDFORD ENERGY INC",
    displaySymbol: "BFDE",
    figi: "BBG000Q3SLF1",
    mic: "OOTC",
    symbol: "BFDE",
    type: "Common Stock",
  },
  {
    currency: "USD",
    description: "BERGAMO ACQUISITION CORP",
    displaySymbol: "BGMO",
    figi: "BBG000FCLKP1",
    mic: "OOTC",
    symbol: "BGMO",
    type: "Common Stock",
  },
  {
    currency: "USD",
    description: "SIMPLICITY ESPORTS AND GAMIN",
    displaySymbol: "WINR",
    figi: "BBG00H4FV5S8",
    mic: "OTCM",
    symbol: "WINR",
    type: "Common Stock",
  },
  {
    currency: "USD",
    description: "RUNNING FOX RESOURCE CORP",
    displaySymbol: "RFXRF",
    figi: "BBG000CBY5C9",
    mic: "OTCM",
    symbol: "RFXRF",
    type: "Common Stock",
  },
  {
    currency: "USD",
    description: "AMERICAN EQUITY INVT LIFE HL",
    displaySymbol: "AEL",
    figi: "BBG000BB6LB7",
    mic: "XNYS",
    symbol: "AEL",
    type: "Common Stock",
  },
  {
    currency: "USD",
    description: "VIVEVE MEDICAL INC",
    displaySymbol: "VIVE",
    figi: "BBG000CD9R35",
    mic: "XNCM",
    symbol: "VIVE",
    type: "Common Stock",
  },
  {
    currency: "USD",
    description: "LANGHAM HOSPITALITY INV -SS",
    displaySymbol: "LMMHF",
    figi: "BBG00FJVV8Q7",
    mic: "OOTC",
    symbol: "LMMHF",
    type: "Stapled Security",
  },
  {
    currency: "USD",
    description:
      "Empower Ltd. Units, each consisting of one Class A ordinary share, $0.0001 par value, and one-third of one redeemable warrant",
    displaySymbol: "EMPW=",
    figi: "",
    mic: "XNYS",
    symbol: "EMPW=",
    type: "",
  },
  {
    currency: "USD",
    description: "CP ALL PCL-UNSP ADR",
    displaySymbol: "CPPCY",
    figi: "BBG0038K6YF3",
    mic: "OTCM",
    symbol: "CPPCY",
    type: "ADR",
  },
  {
    currency: "USD",
    description: "SPAREBANK 1 OESTLANDET",
    displaySymbol: "SPRBF",
    figi: "BBG00HNJDYZ8",
    mic: "OOTC",
    symbol: "SPRBF",
    type: "Common Stock",
  },
  {
    currency: "USD",
    description: "UNI-PRESIDENT CHINA-UNSP ADR",
    displaySymbol: "UPCHY",
    figi: "BBG000VPS9Q1",
    mic: "OTCM",
    symbol: "UPCHY",
    type: "ADR",
  },
];
const useStyles = makeStyles({
  container: {
    width: "25%",
    height: "100%",
  },
  listContainer: {
    width: "100%",
  },
  boxList: {
    width: "100%",
    padding: "15px",
  },
  itemContainer: {
    borderRadius: 10,
  },
  listItem: {
    width: "40%",
    ...center,
  },
  index: {
    width: "20%",
  },
});

function renderRow(props) {
  const classes = useStyles();
  const { index, style } = props;
  return (
    <ListItem
      className={classes.itemContainer}
      button
      style={style}
      key={index}>
      <ListItemText className={classes.index} primary={`${index}`} />
      <ListItemText
        className={classes.listItem}
        primary={`${data[index].symbol}`}
      />
      <ListItemText
        className={classes.listItem}
        primary={`${data[index].mic}`}
      />
    </ListItem>
  );
}

const StockList: React.FC = (): ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <p>All US Stocks</p>
      <Box
        className={classes.boxList}
        border={1.5}
        borderRadius={15}
        borderColor={Colors.lighterText}>
        <FixedSizeList
          className={classes.listContainer}
          height={550}
          itemSize={46}
          itemCount={data.length}>
          {renderRow}
        </FixedSizeList>
      </Box>
    </div>
  );
};

export default StockList;
