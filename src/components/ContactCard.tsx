import React from "react";
import DoctorIcon from "../assets/imgs/doctor.png";


export const ContactCard: React.FC = () => {
    return (
        <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="relative">
                <img className="w-full object-cover" src={DoctorIcon} alt="" />
            </div>
            <div className="px-6 py-4">
                <div className="text-xl font-semibold text-gray-800">Dr. James Wilson</div>
                <p className="text-gray-600">Pediatrician</p>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block px-2 py-1 font-semibold text-teal-900 bg-teal-200 rounded-full">Web</span>
                <span className="inline-block px-2 py-1 font-semibold text-indigo-900 bg-indigo-200 rounded-full">UI/UX</span>
                <span className=" px-2 py-1 font-semibold text-purple-900 bg-purple-200 rounded-full">Design</span>
            </div>
        </div>
    )
}