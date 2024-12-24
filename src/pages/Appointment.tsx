import React, {useState} from "react";
import { Calendar } from "../components/Calendar";
import { Schedule } from "../components/Schedule";


export const Appointment: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const appointments = {
        "2024-12-2": [
          { id: "4", title: "Doctor Visit", time: "10:00", description: "Annual health checkup" }
        ],
        "2024-12-23": [
          { id: "1", title: "Dental Checkup", time: "09:00", description: "Regular dental examination" },
          { id: "2", title: "Team Meeting", time: "14:30", description: "Weekly sync with the team" }
        ],
        "2024-12-24": [
          { id: "3", title: "Doctor Visit", time: "10:00", description: "Annual health checkup" }
        ]
    };

    return (
        <div className="grid grid-cols-3 gap-1">
            <div className="col-span-2">
                <Calendar
                    selectedDate={selectedDate}
                    onDateSelect={setSelectedDate}
                    appointments={appointments}
                />
            </div>
            <div>
                <Schedule />
            </div>
        </div>
    )
}