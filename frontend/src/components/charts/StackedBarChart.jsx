import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';


export default function MyStackedBarChart({dataset, XlabelName, series}) {

    return (
        <BarChart
            dataset={dataset}
            xAxis={[
                {
                    scaleType: 'band',
                    dataKey: XlabelName,
                    tickLabelStyle: {
                        angle: 12,
                        textAnchor: 'start',
                        fontSize: 9,
                    },
                }]}
            series={series}
            width={500}
            height={250}
        />
    );
}