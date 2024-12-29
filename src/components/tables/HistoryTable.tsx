import React from "react";


interface History{
    date: string;
    treatment: string;
    doctor: string;
    charges: number;
}

interface HistoryTableProps{
    histories: History[];
}

export const HistoryTable: React.FC<HistoryTableProps> = (props) => {

    return (
        <div className="bg-white shadow-lg p-3">
            <table className="w-full border-collapse bg-white text-left text-sm text-gray-600">
                <thead className="bg-gray-200 text-gray-700">
                    <tr>
                        <th className="px-6 py-3 font-medium">Date</th>
                        <th className="px-6 py-3 font-medium">Treatment</th>
                        <th className="px-6 py-3 font-medium">Doctor</th>
                        <th className="px-6 py-3 font-medium">Charges</th>
                    </tr>
                </thead>
                <tbody>
                    {props.histories.map((history, index) => (
                        <tr 
                        className={`hover:bg-gray-100 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                        >
                            <td className="px-6 py-4">{history.date}</td>
                            <td className="px-6 py-4">{history.treatment}</td>
                            <td className="px-6 py-4">{history.doctor}</td>
                            <td className="px-6 py-4">{history.charges}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}