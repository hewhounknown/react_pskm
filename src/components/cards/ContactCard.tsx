import React from "react";
import PatientIcon from "../../assets/imgs/patient1.png"
import { 
    PhoneCallIcon, 
    MapPinHouse, 
    Droplet, PersonStanding} from "lucide-react";


export const ContactCard: React.FC = () => {
    return (
        <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="relative">
                <img className="w-full object-cover" src={PatientIcon} alt="" />
            </div>
            <div className="px-6 py-4">
                <div className="text-xl font-semibold text-gray-800">Jone Doe</div>
                <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded 
                dark:bg-gray-700 dark:text-red-400 border border-red-400 inline-flex items-center">
                  <Droplet />  A
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded 
                dark:bg-gray-700 dark:text-green-400 border border-green-400 inline-flex items-center">
                   <PersonStanding /> Male
                </span>
            </div> <hr />
            <div className="px-6 py-4">
                <p className="text-gray-600 text-sm inline-flex items-center mt-2">
                    < PhoneCallIcon  className="me-3 text-green-500"/> 09-234-2424-2
                </p> <hr />
                <p className="text-gray-600 text-sm inline-flex items-center mt-2">
                    < MapPinHouse className="me-3 text-blue-800" /> No. 35, THI, Oc
                </p>
            </div> 
        </div>
    )
}