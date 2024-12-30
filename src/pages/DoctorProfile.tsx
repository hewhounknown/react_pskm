import React from "react";
import { DoctorData } from "../data/doctors";
import { ContactCard } from "../components/cards/ContactCard";
import DoctorIconPath from "../assets/imgs/doctor.png"


export const DoctorProfile: React.FC<{id: string}> = ({id}) => {

    const doctor = DoctorData.find(d => d.id === id);

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
                
            </div>
        </div>
    )
}