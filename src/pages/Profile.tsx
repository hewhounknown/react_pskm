import React from "react";
import { ContactCard } from "../components/cards/ContactCard";
import { ProgressBar } from "../components/charts/ProgressBar";


export const Profile: React.FC = () => {

    return (
        <div className="grid grid-cols-4 gap-3 p-3">
            <div className="col-span-1">
                <ContactCard />
            </div>
            <div className="col-span-3">
                < ProgressBar />
            </div>
        </div>
    )
}