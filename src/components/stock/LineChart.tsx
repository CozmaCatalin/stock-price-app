import React, { Fragment, ReactElement } from "react";
import Plot from "react-plotly.js";

interface LineChartInterface {
  financialItem: any;
  financialItemName: string;
  color: string;
}

const LineChart: React.FC<LineChartInterface> = ({
  financialItem,
  financialItemName,
  color,
}): ReactElement => {
  return (
    // eslint-disable-next-line react/jsx-fragments
    <Fragment>
      <Plot
        data={[
          {
            x: financialItem.financialChartXValues,
            y: financialItem.financialChartCloseValues,
            type: "scatter",
            mode: "lines+markers",
            // eslint-disable-next-line object-shorthand
            marker: { color: color },
          },
        ]}
        layout={{ width: 850, height: 450 }}
        options={{ displaylogo: "false" }}
      />
    </Fragment>
  );
};

export default LineChart;
