import React from 'react';
import { XIcon } from 'lucide-react'

interface AlertBoxProps {
    message: string;
    onClose: () => void;
}

export const AlertBox: React.FC<AlertBoxProps> = ({ message, onClose }) => {
    return (
        <div className="fixed top-0 left-0 right-0 mt-4 mx-auto max-w-md">
            <div className="bg-green-500 text-white p-4 rounded shadow-md flex items-center justify-between">
                <p className="flex-1">{message}</p>
                <button onClick={onClose} className="ml-2 bg-white text-green-500 rounded-circle px-2 py-1">
                    <XIcon />
                </button>
            </div>
        </div>
    );
};
