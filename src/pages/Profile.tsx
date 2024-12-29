import React from "react";
import { PatientData } from "../data/patients";
import { ContactCard } from "../components/cards/ContactCard";
import { ProgressBar } from "../components/charts/ProgressBar";
import { HistoryTable } from "../components/tables/HistoryTable";


export const Profile: React.FC<{id: number}> = ({id}) => {

    const patient = PatientData.find(p => p.id === id);
    const historyData = patient ? patient.histories : [];
    const healthMetrics = patient ? patient.healthMetrics : {heartRate: 0, bloodPressure: 0, sugar: 0};

    return (
        <div className="grid grid-cols-4 gap-3 p-3">
            <div className="col-span-1">
                {patient && <ContactCard name={patient.name} bloodType={patient.bloodType} gender={patient.gender} contactNumber={patient.contactNumber} address={patient.address} />}
            </div>
            <div className="col-span-3">
                {healthMetrics && <ProgressBar 
                    heartRate={healthMetrics.heartRate} 
                    bloodPressure={healthMetrics.bloodPressure} 
                    sugar={healthMetrics.sugar}
                />}
                <div className="p-3">
                    <HistoryTable histories={historyData} />
                </div>
            </div>
        </div>
    )
}