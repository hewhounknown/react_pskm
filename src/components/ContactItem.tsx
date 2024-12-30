import React from "react";


interface ContactItemProps{
    itemIcon: React.ElementType;
    iconColor: string;
    itemName: string;
}

export const ContactItem: React.FC<ContactItemProps> = (props) => {
    return (
        <>
        <p className="text-gray-600 text-sm inline-flex items-center mt-2">
            <props.itemIcon className={`me-3 ${props.iconColor}`} /> {props.itemName}
        </p> 
        <hr />
        </>
    )
}