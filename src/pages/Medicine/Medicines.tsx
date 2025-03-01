import React from "react";
import { MedicineTable } from "../../components/tables/MedicineTable";
import { SearchBox } from "../../components/Searchbox";
import { medicineData } from "../../data/medicines";


export const Medicines: React.FC = () => {
    return(
        <div className="m-3">
            <SearchBox />
            <MedicineTable medicines= {medicineData}/>
        </div>
    )
}