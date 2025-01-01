import React from 'react';
import { statsCards } from '../data/statscards';
import { StatCard } from '../components/cards/StatCard';
import { PerformanceLineChart } from '../components/charts/PerformanceLineChart';
import { RoomStatusDonutChart } from '../components/charts/RoomStatusDonutChart';


export const Dashboard: React.FC = () => {

  // TODO: replace this sample series with calculated data later
  const series = [{
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
                  }]

  return (
    <div className="p-6 w-full">
      <h1 className="text-3xl font-bold text-gray-800 mb-3">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-3">
          {statsCards.map((card) => (
            <StatCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              value={card.value}
              bgColor={card.bgColor}
              textColor={card.textColor}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="col-span-2">
              <PerformanceLineChart series={series}/>
          </div>
          <div className='col-span-1'>
              <RoomStatusDonutChart />
          </div>
        </div>
    </div>
  );
};