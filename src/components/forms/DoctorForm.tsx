import React from "react";
import { UserPlus, Save } from 'lucide-react';

export const DoctorForm: React.FC = () => {

    const inputFields = [
        { name: 'name', label: 'Name *', type: 'text', required: true },
        { name: 'dateOfBirth', label: 'Date of Birth *', type: 'date', required: true },
        { name: 'role', label: 'Role *', type: 'text', required: true },
        { name: 'gender', label: 'Gender *', type: 'select', options: ['Select Gender', 'male', 'female', 'other'], required: true },
        { name: 'contactNumber', label: 'Contact Number *', type: 'text', required: true },
        { name: 'email', label: 'Email', type: 'text', required: true },
        { name: 'address', label: 'Address', type: 'text', required: true },
        { name: 'salary', label: 'Salary *', type: 'text', required: true },
    ];

    return (
        <div className="max-w-4xl p-5 mx-auto bg-white shadow-md rounded-lg mt-4">
            <div className="flex items-center mb-6">
                <UserPlus className="mr-3 text-blue-600" size={32} />
                <h2 className="text-2xl font-bold text-gray-800">New Doctor Registration</h2>
            </div>
            <form >
                <div className="flex flex-wrap">
                    {inputFields.map((field) => (
                        <div className="w-full md:w-1/2 px-2 mb-2">
                            <label htmlFor="" className="block text-gray-700 mb-2">{field.label}</label>
                            <div>
                                {field.type === 'select' && field.options ? (
                                    <select 
                                    name={field.name}
                                    className='w-full p-2 border rounded-md focus:outline-none focus:ring-2'>
                                        {field.options.map((option) => (
                                           <option 
                                            key={option} 
                                            value={option === 'Select Gender' ? '' : option}
                                            >
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <input 
                                    type={field.type}
                                    name={field.name}
                                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4">
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold 
                    hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded flex">
                         <Save className="mr-2" size={20} />
                        Register
                    </button>
                </div>
            </form>
        </div>
    )
}