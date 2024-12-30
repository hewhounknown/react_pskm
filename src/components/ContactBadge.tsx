import React from "react";


interface ContactBandageProps{
    bandageIcon: React.ElementType;
    bandageColor: string;
    bandageTitle: string;
}

export const ContactBadge: React.FC<ContactBandageProps> = (props) => {

    return (
        <span className={`bg-${props.bandageColor}-100 text-${props.bandageColor}-800 text-xs 
        font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-${props.bandageColor}-400 border 
        border-${props.bandageColor}-400 inline-flex items-center`}>
            <props.bandageIcon />  {props.bandageTitle}
        </span>
    )
}