import React from "react";
import { ContactItem } from "../ContactItem";
import { ContactBadge } from "../ContactBadge";
import { 
    PhoneCallIcon, 
    MapPinHouse, 
    Droplet, 
    PersonStanding,
    Shield,
    Cake,
    Stethoscope,
    AlarmClock,
    Mail,
    CreditCard } from "lucide-react";


interface ContactProps{
    profilePath: string
    name: string;
    bloodType?: string;
    gender: string;
    contactNumber?: string;
    address?: string;
    guardian?: string;
    dateOfBirth: string;
    role?: string;
    availability?: string;
    email?: string;
    salary?: number;
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
                {props.role && (
                    <ContactBadge bandageIcon={Stethoscope} bandageColor="purple" bandageTitle={props.role} />
                )}
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
                {props.email && (
                    <ContactItem itemIcon={Mail} iconColor="text-blue-300" itemName={props.email} />
                )}
                {props.availability && (
                    <ContactItem itemIcon={AlarmClock} iconColor="text-green-300" itemName={props.availability} />
                )}                
                {props.salary && (
                    <ContactItem itemIcon={CreditCard} iconColor="text-cyan-300" itemName={String(props.salary)} />
                )}
                {}
            </div> 
        </div>
    )
}