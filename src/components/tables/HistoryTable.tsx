import React from "react";


export const HistoryTable: React.FC = () => {

    return (
        <div>
            <table className="w-full border-collapse bg-white text-left text-sm text-gray-600">
                <thead className="bg-gray-200 text-gray-700">
                    <tr>
                        <th className="px-6 py-3 font-medium">Date</th>
                        <th className="px-6 py-3 font-medium">Treatment</th>
                        <th className="px-6 py-3 font-medium">Doctor</th>
                        <th className="px-6 py-3 font-medium">Charges</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}