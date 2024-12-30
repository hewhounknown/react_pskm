import React from "react";
import { 
    PhoneCallIcon, 
    MapPinHouse, 
    Droplet, 
    PersonStanding,
    Shield,
    Cake } from "lucide-react";
import { ContactItem } from "../ContactItem";
import { ContactBadge } from "../ContactBadge";


interface ContactProps{
    profilePath: string
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
                <img className="w-full object-cover" src={props.profilePath} alt="" />
            </div>
            <div className="px-6 py-4">
                <div className="text-xl font-semibold text-gray-800 mb-2">{props.name}</div>
                {props.bloodType && (
                    <ContactBadge bandageIcon={Droplet} bandageColor="red" bandageTitle={props.bloodType} />
                )}
                <ContactBadge bandageIcon={PersonStanding} bandageColor="green" bandageTitle={props.gender} />
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