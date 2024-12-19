import React from 'react';
import { 
  UserIcon, 
  BedDoubleIcon, 
  ClipboardListIcon, 
  DollarSignIcon 
} from 'lucide-react';


export const Dashboard: React.FC = () => {
  const statsCards = [
    { 
      icon: UserIcon, 
      title: 'Total Patients', 
      value: '1,254', 
      bgColor: 'bg-blue-100', 
      textColor: 'text-blue-600' 
    },
    { 
      icon: BedDoubleIcon, 
      title: 'Occupied Beds', 
      value: '87/150', 
      bgColor: 'bg-green-100', 
      textColor: 'text-green-600' 
    },
    { 
      icon: ClipboardListIcon, 
      title: 'Appointments', 
      value: '42', 
      bgColor: 'bg-yellow-100', 
      textColor: 'text-yellow-600' 
    },
    { 
      icon: DollarSignIcon, 
      title: 'Monthly Revenue', 
      value: '$124,560', 
      bgColor: 'bg-purple-100', 
      textColor: 'text-purple-600' 
    }
  ];

  return (
    <div className="p-6 w-full">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsCards.map((card) => (
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
        ))}
      </div>
    </div>
  );
};