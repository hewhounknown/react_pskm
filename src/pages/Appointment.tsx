import React from "react";
import { Calendar } from "../components/Calendar";


export const Appointment: React.FC = () => {

    return (
        <div className="grid grid-cols-3 gap-1">
            <div className="col-span-2">
                <Calendar/>
            </div>
        </div>
    )
}