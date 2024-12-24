import React from "react";


interface Doctor{
    id: string;
    name: string;
    specialty: string;
    availability: string[];
    contact: string;
}

interface DoctorTableProps{
    doctors: Doctor[];
}

export const DoctorTable: React.FC<DoctorTableProps> = ({doctors}) => {

    return (
        <div className="relative flex flex-col overflow-scroll rounded-lg shadow-md m-5">
            <table className="w-full border-collapse bg-white text-left text-sm text-gray-600">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Name</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Specialty</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Availability</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Contact</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {doctors.map((doctor) => (
                        <tr 
                            key={doctor.id}
                            className="hover:bg-gray-50 transition-colors"
                        >
                            <td className="px-6 py-4">
                                <div className="text-sm font-medium text-gray-900">{doctor.name}</div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-600">{doctor.specialty}</div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-600">
                                {doctor.availability.join(', ')}
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-600">{doctor.contact}</div>
                            </td>
                            {/* <td className="px-6 py-4">
                                <button
                                onClick={() => onSelectDoctor?.(doctor)}
                                className="px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
                                >
                                Select
                                </button>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}