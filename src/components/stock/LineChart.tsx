import React, { Fragment, ReactElement } from "react";
import Plot from "react-plotly.js";

interface LineChartInterface {
  financialItem: IFinancialItem;
  color: string;
}

const LineChart: React.FC<LineChartInterface> = ({
  financialItem,
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
        layout={{
          width: 800,
          height: 400,
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

export default LineChart;
