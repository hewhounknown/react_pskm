import { 
    UserIcon, 
    BedDoubleIcon, 
    ClipboardListIcon, 
    DollarSignIcon 
  } from 'lucide-react';
  
export const statsCards = [
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