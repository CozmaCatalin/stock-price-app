import React, { ReactElement } from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    width: "65%",
    height: "100%",
  },
});

const StockChart: React.FC = (): ReactElement => {
  const classes = useStyles();
  return (
    <Box className={classes.container} border={1} borderRadius={15}>
      <p>chart</p>
    </Box>
  );
};

export default StockChart;
