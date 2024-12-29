import React from "react";


interface StatCardProps {
    title : string;
    bgColor: string;
    textColor: string;
    value: string;
    icon: React.ElementType;
}

export const StatCard: React.FC<StatCardProps> = (card) => {
    return (
        <div 
        key={card.title}
        className={`
          ${card.bgColor} p-6 rounded-lg shadow-md flex items-center 
          justify-between hover:scale-105 transition-transform
        `}
      >
        <div>
          <h3 className={`text-sm font-medium ${card.textColor}`}>
            {card.title}
          </h3>
          <p className={`text-2xl font-bold ${card.textColor}`}>
            {card.value}
          </p>
        </div>
        <card.icon size={40} className={card.textColor} />
      </div>
    )
}