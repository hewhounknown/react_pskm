import React from "react";
import { PatientTable } from "../components/tables/PatientTable";
import { PatientData } from "../data/patients";


export const Patients: React.FC = () => {

    return (
        <PatientTable patients= {PatientData}/>
    )
}

