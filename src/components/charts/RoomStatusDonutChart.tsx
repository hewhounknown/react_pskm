import React from "react";
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';


interface ChartState {
    series: number[];
    options: ApexOptions;
}

export const RoomStatusDonutChart: React.FC = () => {
    const [state, setState] = React.useState<ChartState>({
      
        series: [44, 5],
        options: {
          chart: {
            type: 'donut',
          },
          labels: ["occupied", "available"],
          title: {
            text: 'Room Status',
            align: 'left'
        },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }],
        },
      
      
    });

    return (
      <div>
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="donut" height={500} />
          </div>
        <div id="html-dist"></div>
      </div>
    );
  }
