import React from "react";
import { Link } from "react-router-dom";


interface Patient {
  id: number;
  name: string;
  gender: string;
  age: number;
  contactNumber: string;
}

interface PatientTableProps {
  patients: Patient[];
}

export const PatientTable: React.FC<PatientTableProps> = (props) => {
    return (
        <div className="relative flex flex-col overflow-scroll rounded-lg shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-600">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-6 py-3 font-medium">#</th>
              <th className="px-6 py-3 font-medium">Name</th>
              <th className="px-6 py-3 font-medium">Gender</th>
              <th className="px-6 py-3 font-medium">Age</th>
              <th className="px-6 py-3 font-medium">Contact</th>
            </tr>
          </thead>
          <tbody>
            {props.patients.map((patient, index) => (
              <tr
                key={patient.id}
                className={`hover:bg-gray-100 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
              >
                <td className="px-6 py-4">{patient.id}</td>
                <td className="px-6 py-4">
                    <Link to={`profile/`}>
                        {patient.name}
                    </Link>
                </td>
                <td className="px-6 py-4">{patient.gender}</td>
                <td className="px-6 py-4">{patient.age}</td>
                <td className="px-6 py-4">{patient.contactNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
} 