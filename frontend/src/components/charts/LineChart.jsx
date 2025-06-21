import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';



export default function MyLineChart({ mydata, myxaxis, myseries, width = 400, height = 250 }) {
  return (
    <LineChart
      dataset={mydata}
      xAxis={[{ dataKey: myxaxis, scaleType: 'point' }]}
      series={myseries}
      height={height}
      width={width}
    />
  );
}
