import React from "react";

interface ScheduleProps {
  selectedDate: Date;
  appointments: any[];
}

export const Schedule: React.FC<ScheduleProps> = ({ selectedDate, appointments }) => {
    console.log(selectedDate)
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

    const dateKey = formatDate(selectedDate);
    console.log('Looking for appointments on:', dateKey);
    console.log('Available appointments:', appointments);
    const todayAppointments = appointments.filter(appt => appt.date === dateKey);
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
        </div>
    );
}