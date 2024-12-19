import React from "react";
import { PatientTable } from "../components/tables/PatientTable";
import { PatientData } from "../data/patients";
import { SearchBox } from "../components/Searchbox";


export const Patients: React.FC = () => {

    return (
        <>
        <SearchBox></SearchBox>
        <PatientTable patients= {PatientData}/>
        </>
    )
}

