import React from "react";
import PatientIcon from "../../assets/imgs/patient1.png"
import { 
    PhoneCallIcon, 
    MapPinHouse, 
    Droplet, 
    PersonStanding,
    Shield,
    Cake } from "lucide-react";
import { ContactItem } from "../ContactItem";


interface ContactProps{
    name: string;
    bloodType?: string;
    gender: string;
    contactNumber?: string;
    address?: string;
    guardian?: string;
    dateOfBirth: string;
}

export const ContactCard: React.FC<ContactProps> = (props) => {
    return (
        <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="relative">
                <img className="w-full object-cover" src={PatientIcon} alt="" />
            </div>
            <div className="px-6 py-4">
                <div className="text-xl font-semibold text-gray-800 mb-2">{props.name}</div>
                {props.bloodType && (
                    <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded 
                    dark:bg-gray-700 dark:text-red-400 border border-red-400 inline-flex items-center">
                        <Droplet />  {props.bloodType}
                    </span>
                )}
                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded 
                dark:bg-gray-700 dark:text-green-400 border border-green-400 inline-flex items-center">
                   <PersonStanding /> {props.gender}
                </span>
            </div> <hr />
            <div className="px-6 py-4">
                {props.contactNumber && (
                    <ContactItem itemIcon={PhoneCallIcon} iconColor="text-green-500" itemName={props.contactNumber} />
                )}
                {props.address && (
                    <ContactItem itemIcon={MapPinHouse} iconColor="text-blue-800" itemName={props.address} />
                )}
                {props.dateOfBirth && (
                    <ContactItem itemIcon={Cake} iconColor="text-blue-gray" itemName={props.dateOfBirth} />
                )}
                {props.guardian && (
                    <ContactItem itemIcon={Shield} iconColor="text-pink-800" itemName={props.guardian} />
                )}
            </div> 
        </div>
    )
}