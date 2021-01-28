import React, { Fragment, ReactElement } from "react";
import Plot from "react-plotly.js";
import { Colors } from "../../theme";

interface CandleStickInterface {
  financialItem: any;
  financialItemName: string;
}

const CandleStickChart: React.FC<CandleStickInterface> = ({
  financialItem,
  financialItemName,
}): ReactElement => {
  console.log(financialItem);
  return (
    // eslint-disable-next-line react/jsx-fragments
    <Fragment>
      <Plot
        data={[
          {
            x: financialItem.financialChartXValues,
            close: financialItem.financialChartCloseValues,
            decreasing: { line: { color: "red" } },
            high: financialItem.financialChartHighValues,
            increasing: { line: { color: Colors.primary } },
            line: { color: "rgba(31,119,180,1)" },
            low: financialItem.financialChartLowValues,
            open: financialItem.financialChartOpenValues,
            type: "candlestick",
          },
        ]}
        layout={{
          width: 800,
          height: 500,
          title: financialItemName,
          dragmode: "zoom",
          showlegend: false,
          xaxis: {
            rangeslider: {
              visible: false,
            },
          },
          yaxis: {
            autorange: true,
          },
        }}
        options={{ displaylogo: "false" }}
      />
    </Fragment>
  );
};

export default CandleStickChart;
