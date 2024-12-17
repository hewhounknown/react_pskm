import React from "react";
import { PatientTable } from "../components/patients/PatientTable";
import { PatientData } from "../data/patients";


export const Patients: React.FC = () => {

    return (
        <>
        <PatientTable patients= {PatientData}/>
        </>
    )
}

