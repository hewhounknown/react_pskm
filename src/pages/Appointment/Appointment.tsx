import React, {useState} from "react";
import { Calendar } from "../../components/Calendar";
import { Schedule } from "../../components/Schedule";
import { AppointmentData } from "../../data/appointments";
import { DoctorData } from "../../data/doctors";
import { PatientData } from "../../data/patients";
import { useAuth } from "../../context/AuthContext";


export const Appointment: React.FC<{ isDoctorPortal?: boolean}> = ({isDoctorPortal= false}) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    console.log(selectedDate)

    function formatAppointment(appointment: any ) {
        let doctorName = DoctorData.find(doc=> doc.id == appointment.doctorId)?.name;
        let patientName = PatientData.find(p=> p.id == appointment.patientId)?.name;

        return {
            id: appointment.id,
            date: appointment.date,
            time: appointment.time,
            title: appointment.title,
            status: appointment.status,
            doctorName: doctorName,
            patientName: patientName
        };
    }

    const auth = useAuth()

    const filteredAppointmentData = isDoctorPortal 
        ? AppointmentData.filter(app => app.doctorId == auth?.user?.id)
        : AppointmentData

    const appointments = filteredAppointmentData.map(app => formatAppointment(app));

    return (
        <div className="grid grid-cols-3 gap-1">
            <div className="col-span-2">
                <Calendar
                    selectedDate={selectedDate}
                    onDateSelect={setSelectedDate}
                    appointments={filteredAppointmentData}
                />
            </div>
            <div>
                <Schedule
                    selectedDate={selectedDate}
                    appointments={appointments}
                />
            </div>
        </div>
    )
}