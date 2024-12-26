import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
    HomeIcon, 
    Users as PatientIcon, 
    User as DoctorIcon, 
    Calendar as CalendarIcon,
    UserRoundPlus as NewPeople,
    ChevronDown } from 'lucide-react';

export const Sidebar: React.FC = () => {
    const location = useLocation();
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const menuItems = [
        { path: '/', icon: HomeIcon, label: 'Dashboard' },
        {
            label: 'Patient', 
            icon: PatientIcon, 
            id: 'patient-dropdown',
            dropMenus: [
                { path: '/patients', icon: PatientIcon, label: 'Patients' },
                { path: '/new-patient-form', icon: NewPeople, label: 'Add New Patient' }
            ]
        },
        {
            label: 'Doctor', 
            icon: DoctorIcon, 
            id: 'doctor-dropdown',
            dropMenus: [
                { path: '/doctors', icon: DoctorIcon, label: 'Doctors' },
                { path: '/new-doctor-form', icon: NewPeople, label: 'Add New Doctor'},
            ]
        },
        { path: '/appointments', icon: CalendarIcon, label: 'Appointments' }
    ];

    const handleDropdownEnter = (id: string) => {
        setActiveDropdown(id);
    };

    const handleDropdownLeave = () => {
        setActiveDropdown(null);
    };


    const isDropdownActive = (dropMenus: Array<{ path: string }>) => {
        return dropMenus.some(item => location.pathname === item.path);
    };
    
    return (
        <div className="bg-slate-800 shadow-md h-screen w-24 md:w-64 transition-all">
            <div className="p-4 text-center">
                <h1 className="text-2xl font-bold text-teal-300 md:block hidden">PSKM Admin</h1>
            </div>
            <nav className="p-4">
                {menuItems.map(item => (
                    <div key={item.label}>
                        {item.dropMenus ? (
                            <div 
                                className="relative"
                                onMouseEnter={() => handleDropdownEnter(item.id!)}
                                onMouseLeave={handleDropdownLeave}
                            >
                                <button 
                                    className={`
                                        w-full flex items-center justify-between p-3 mb-2 rounded-lg
                                        transition-all duration-200 ease-in-out
                                        ${(activeDropdown === item.id || isDropdownActive(item.dropMenus))
                                            ? 'bg-slate-600 text-teal-300' 
                                            : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-teal-200'}
                                    `}
                                >
                                    <div className="flex items-center">
                                        <item.icon className="mr-0 md:mr-3" size={20} />
                                        <span className="hidden md:inline">{item.label}</span>
                                    </div>
                                    <ChevronDown 
                                        className={`hidden md:block transition-transform duration-200 ${
                                            activeDropdown === item.id ? 'rotate-180' : ''
                                        }`} 
                                        size={16} 
                                    />
                                </button>
                                <div 
                                    className={`
                                        absolute left-0 md:left-full top-0 md:top-0 ml-0 md:ml-2
                                        w-full md:w-48 rounded-lg shadow-lg
                                        transition-all duration-200 ease-in-out
                                        ${activeDropdown === item.id 
                                            ? 'opacity-100 visible translate-y-0' 
                                            : 'opacity-0 invisible translate-y-2'}
                                        bg-slate-700 border border-slate-600
                                    `}
                                    style={{ 
                                        marginTop: '0.5rem',
                                        zIndex: 50 
                                    }}
                                >
                                    {item.dropMenus.map(dropItem => (
                                        <Link 
                                            key={dropItem.label}
                                            to={dropItem.path} 
                                            className={`
                                                flex items-center p-3 
                                                transition-colors duration-200
                                                ${location.pathname === dropItem.path 
                                                    ? 'bg-slate-600 text-teal-300' 
                                                    : 'text-gray-300 hover:bg-slate-600 hover:text-teal-200'}
                                                first:rounded-t-lg last:rounded-b-lg
                                            `}
                                        >
                                            <dropItem.icon className="mr-3" size={18} />
                                            <span>{dropItem.label}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link 
                                to={item.path} 
                                className={`
                                    flex items-center p-3 mb-2 rounded-lg
                                    transition-colors duration-200
                                    ${location.pathname === item.path 
                                        ? 'bg-slate-600 text-teal-300' 
                                        : 'text-gray-300 hover:bg-slate-700 hover:text-teal-200'}
                                `}
                            >
                                <item.icon className="mr-0 md:mr-3" size={20} />
                                <span className="hidden md:inline">{item.label}</span>
                            </Link>
                        )}
                    </div>
                ))}
            </nav>
        </div>
    );
};