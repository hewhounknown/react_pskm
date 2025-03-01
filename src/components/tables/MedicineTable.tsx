import React from "react";


interface Medicine{
    id: number,
    name: string,
    dosage: string,
    qty: number,
    price: number
}

interface MedicineTableProps {
    medicines: Medicine[]
}

export const MedicineTable: React.FC<MedicineTableProps> = (props) => {

    return (
        <div className="relative flex flex-col overflow-scroll rounded-lg shadow-md m-5">
            <table className="w-full border-collapse bg-white text-left text-sm text-gray-600">
                <thead className="bg-gray-200 text-gray-700">
                    <tr>
                        <th className="px-6 py-3 font-medium">Name</th>
                        <th className="px-6 py-3 font-medium">Dosage</th>
                        <th className="px-6 py-3 font-medium">Qty</th>
                        <th className="px-6 py-3 font-medium">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.medicines.map((medicine, index)=> (
                        <tr key={medicine.id} className={`hover:bg-gray-100 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                            <td className="px-6 py-4">{medicine.name}</td>
                            <td className="px-6 py-4">{medicine.dosage}</td>
                            <td className="px-6 py-4">{medicine.qty}</td>
                            <td className="px-6 py-4">{medicine.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}