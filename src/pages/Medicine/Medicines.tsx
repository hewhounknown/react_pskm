import React, {useState} from "react";
import { MedicineTable } from "../../components/tables/MedicineTable";
import { SearchBox } from "../../components/Searchbox";
import { medicineData } from "../../data/medicines";
import { MedicineForm } from "./MedicineForm";


export const Medicines: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);


    return(
        <div className="m-3">
            <div className="flex justify-between">
                <div>
                <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-cyan-500 text-white px-3 py-2 rounded-md hover:bg-cyan-800 transition duration-200"
                    >
                        Add New
                    </button>
                </div>
                <div>
                <SearchBox />
                </div>

            </div>

            <MedicineTable medicines= {medicineData}/>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
                onClick={() => setIsModalOpen(false)} >
                    <div className="relative p-4 w-full max-w-2xl bg-white rounded-lg"
                        onClick={e => e.stopPropagation()}>
                        <button
                            type="button"
                            className="absolute top-5 right-5 text-gray-400 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
                            onClick={() => setIsModalOpen(false)} >
                            <span className="text-2xl">&times;</span>
                        </button>
                        <MedicineForm/>
                    </div>
                </div>
            )}
        </div>
        )
}