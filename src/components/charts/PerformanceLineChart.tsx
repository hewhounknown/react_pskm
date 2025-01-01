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

interface LineChartProps {
    series: {
        name: string;
        data: number[];
    }[];
}

export const PerformanceLineChart: React.FC<LineChartProps> = (props) => {
  const [state, setState] = React.useState<ChartState>({
        series: props.series,
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