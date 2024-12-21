import React from 'react';
import { statsCards } from '../data/statscards';
import { StatCard } from '../components/StatCard';


export const Dashboard: React.FC = () => {

  return (
    <div className="p-6 w-full">
      <h1 className="text-3xl font-bold text-gray-800 mb-3">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
    </div>
  );
};