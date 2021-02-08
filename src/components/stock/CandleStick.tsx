import React, { Fragment, ReactElement } from "react";
import Plot from "react-plotly.js";
import { Colors } from "../../theme";

interface CandleStickInterface {
  financialItem: IFinancialItem;
  width: number;
  height: number;
}

const CandleStickChart: React.FC<CandleStickInterface> = ({
  financialItem,
  width,
  height,
}): ReactElement => {
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
          width,
          height,
          dragmode: "zoom",
          showlegend: false,
          hovermode: "closest",
          xaxis: {
            showspikes: true,
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
