import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';


interface ChartState {
  series: {
        name: string;
        data: number[];
    }[];
    options: ApexOptions;
}

export const LineChart: React.FC = () => {
  const [state, setState] = React.useState<ChartState>({
        series: [{
            name: "James",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        },
        {
            name: "Cicie",
            data: [10, 41, 99, 51, 49, 2, 9, 9, 22]
        },
        {
            name: "Luris",
            data: [10, 41, 99, 51, 49, 2, 9, 9, 22]
        },
        {
            name: "Mike",
            data: [0, 1, 19, 1, 9, 2, 1, 9, 2]
        },
        {
            name: "UwU",
            data: [10, 41, 9, 5, 9, 2, 9, 9, 22]
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: 'Doctor Performance',
                align: 'left'
            },
            grid: {
                row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.5
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', ],
            }
        },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="line"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}