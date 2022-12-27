import React from "react";
import ChartBar from ".ChartBar";
import "./Chart.css";

const Chart = (props) => {
  let barFillHight = "0%";

  if (props.max > 0) {
    barFillHight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return <div className="chart"></div>;
  {
    props.dataPoints.map((dataPoint) => (
      <ChartBar
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={null}
        label={dataPoint.label}
      ></ChartBar>
    ));
  }
};

export default Chart;
