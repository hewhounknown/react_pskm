import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import { 
    HomeIcon, 
    Users as PatientIcon, 
    User as DoctorIcon, 
    Calendar as CalendarIcon,
    UserRoundPlus as NewPeople } from 'lucide-react';


export const Sidebar: React.FC = () =>{

    const location = useLocation();

    const menuItems = [
        { path: '/', icon: HomeIcon, label: 'Dashboard' },
        { path: '/patients', icon: PatientIcon, label: 'Patients' },
        { path: '/new-patient-form', icon: NewPeople, label: 'Add New Patient' },
        { path: '/doctors', icon: DoctorIcon, label: 'Doctors' },
        { path: '/appointments', icon: CalendarIcon, label: 'Appointments' }
    ]
    
    return (
        <>
        <div className='w-64 bg-slate-800 shadow-md h-screen'>
            <div className="p-4 text-center border-b">
                <h1 className="text-2xl font-bold text-teal-300">PSKM Admin</h1>
            </div>
            <nav className='p-4'>
                {menuItems.map(item => (
                    <Link 
                        to={item.path} 
                        className={`
                        flex items-center p-3 mb-2 rounded-lg transition-colors duration-200
                        ${location.pathname === item.path 
                          ? 'bg-slate-600 text-blue-600' 
                          : 'hover:bg-slate-500 text-gray-700'}
                        `}>
                            <item.icon className="mr-3" size={20} />
                            {item.label}
                    </Link>
                ))}
            </nav>
        </div>
        </>
    )
} 