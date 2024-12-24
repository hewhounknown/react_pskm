import React from "react";
import { DoctorTable } from "../components/tables/DoctorTable";
import { DoctorData } from "../data/doctors";


export const Doctors: React.FC = () => {
    return (
        <DoctorTable doctors={DoctorData} />
    )
}