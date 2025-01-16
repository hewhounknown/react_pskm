import React from "react";
import { DoctorTable } from "../../components/tables/DoctorTable";
import { DoctorData } from "../../data/doctors";
import { SearchBox } from "../../components/Searchbox";


export const Doctors: React.FC = () => {
    return (
        <div className="m-3">
            <SearchBox />
            <DoctorTable doctors={DoctorData} />
        </div>
    )
}