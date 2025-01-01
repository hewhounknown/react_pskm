import React, {useState} from "react";
import { Calendar } from "../components/Calendar";
import { Schedule } from "../components/Schedule";
import { AppointmentData } from "../data/appointments";


export const Appointment: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div className="grid grid-cols-3 gap-1">
            <div className="col-span-2">
                <Calendar
                    selectedDate={selectedDate}
                    onDateSelect={setSelectedDate}
                    appointments={AppointmentData}
                />
            </div>
            <div>
                <Schedule
                    selectedDate={selectedDate}
                    appointments={AppointmentData}
                />
            </div>
        </div>
    )
}