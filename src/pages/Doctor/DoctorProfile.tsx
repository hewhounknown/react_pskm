import React from "react";
import { DoctorData } from "../../data/doctors";
import { ContactCard } from "../../components/cards/ContactCard";
import DoctorIconPath from "../../assets/imgs/doctor.png"
import { PerformanceLineChart } from "../../components/charts/PerformanceLineChart";


export const DoctorProfile: React.FC<{id: string}> = ({id}) => {

    const doctor = DoctorData.find(d => d.id === id);

    const performance = [{
        name: "you",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }];

    return (
        <div className="grid grid-cols-4 gap-3 p-3">
            <div className="col-span-1">
                {doctor && 
                    <ContactCard profilePath={DoctorIconPath} name={doctor.name} gender={doctor.gender} 
                    dateOfBirth={doctor.dateOfBirth} role={doctor.specialty} availability={doctor.availability}
                    address={doctor.address} email={doctor.email} salary={doctor.salary}/>
                }
            </div>
            <div className="col-span-3">
                <PerformanceLineChart series={performance} />
            </div>
        </div>
    )
}