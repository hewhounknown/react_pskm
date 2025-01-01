import React, { useState } from "react";
import { AppointmentForm } from "./forms/AppointmentForm";

interface ScheduleProps {
  selectedDate: Date;
  appointments: any[];
}

export const Schedule: React.FC<ScheduleProps> = ({ selectedDate, appointments }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dateString = selectedDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const formatDate = (date: Date) => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const date = formatDate(selectedDate);
    console.log('Looking for appointments on:', date);
    const todayAppointments = appointments.filter(appt => appt.date === date);
    console.log('Found appointments:', todayAppointments);



    return (
        <div className="bg-white h-screen overflow-auto">
            <div className="flex flex-col md:flex-row items-center gap-2 mb-4 ms-2">
                <span className="text-xl">📅</span>
                <h2 className="text-lg font-semibold">{dateString}</h2>
            </div>
            <div className="p-6">    
                <div className="space-y-4">
                    {todayAppointments.length === 0 ? (
                        <p className="text-gray-500 text-center py-4">
                        No appointments scheduled
                        </p>
                    ) : (
                        todayAppointments.map((appointment) => (
                        <div
                            key={appointment.id}
                            className="border rounded-lg p-4 hover:bg-gray-100"
                        >
                            <div className="flex flex-col md:flex-row justify-between">
                            <div className="mb-2 md:mb-0">
                                <h3 className="font-medium">{appointment.title}</h3>
                                <p className="text-sm text-gray-500">{appointment.description}</p>
                            </div>
                            <span className="text-sm font-medium">
                                {appointment.time}
                            </span>
                            </div>
                        </div>
                        ))
                    )}
                </div>
            </div>
            
            <div className="flex justify-center mt-auto pb-4">
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="block text-white bg-indigo-400 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
                    type="button"
                >
                    Add Appointment
                </button>

                {isModalOpen && (
                    <div 
                        className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <div 
                            className="relative p-4 w-full max-w-2xl bg-white rounded-lg"
                            onClick={e => e.stopPropagation()}
                        >
                            <AppointmentForm desiredDate={date}/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}