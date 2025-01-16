import React from "react";
import { PatientTable } from "../../components/tables/PatientTable";
import { PatientData } from "../../data/patients";
import { SearchBox } from "../../components/Searchbox";


export const Patients: React.FC = () => {

    return (
        <div className="m-3">
            <SearchBox />
            <PatientTable patients= {PatientData}/>
        </div>
    )
}

