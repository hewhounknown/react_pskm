import React, { useState } from "react";
import {CalendarArrowUp, Save} from "lucide-react"
import { DoctorData } from "../../data/doctors";


interface AppointmentFormState{
    title: string;
    patientName: string;
    consultingDoctor: string;
    time: string;
    date: string;
    [key: string]: string;
}

export const AppointmentForm: React.FC<{desiredDate: string}> = ({desiredDate}) => {

    const [formData, setFormData] = useState<AppointmentFormState>({
        title: '',
        patientName: '',
        consultingDoctor: '',
        time: '',
        date: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: name === 'date' ? desiredDate : value,
        }));
    };

    const [errors, setErrors] = useState<Partial<AppointmentFormState>>({})

    const doctors = DoctorData.map(d => d.name)

    const inputFields = [
        {name: 'title', label: 'Title *', type: 'text', required: true},
        {name: 'patientName', label: 'Patient Name *', type: 'text', required: true},
        {name: 'consultingDoctor', label: 'Consulting Doctor *', type: 'select', options: ['Select a doctor', ...doctors], required: true},
        {name: 'time', label: 'Time *', type: 'time', required: true},
    ]

    return (
        <div className="max-w-4xl p-3 mx-auto bg-white shadow-md rounded-lg">
            <div className="flex items-center mb-6">
                <CalendarArrowUp className="mr-3 text-green-200" size={32} />
                <h3 className="font-bold text-gray-800">New Appointment for {desiredDate}</h3>
            </div>
            <form action="">
                <div className="flex flex-wrap -mx-2">
                {inputFields.map((field) => (
                        <div className="w-full md:w-1/2 px-2 mb-2" key={field.name}>
                            <label htmlFor={field.name} className="block text-gray-700 mb-2">{field.label}</label>
                            <div className="relative">
                                {field.type === 'select' && field.options ? (
                                    <select 
                                        name={field.name}
                                        value={formData[field.name]}
                                        onChange={handleInputChange}
                                        className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2`}>
                                        {field.options.map((option, index) => (
                                            <option 
                                            key={option} 
                                            value={index === 0 ? '' : option}
                                            >
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <input 
                                        type={field.type}
                                        name={field.name}
                                        value={formData[field.name]}
                                        onChange={handleInputChange}
                                        className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2`}
                                        placeholder={field.name === "availability" ? 'Mon-Fri 8am-5pm, Sat 3pm-9pm...' : ''} />
                                )}
                                {field.required && errors[field.name] && (
                                    <span className="text-red-500 text-sm">{errors[field.name]}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-6">
                    <button 
                        type="submit" 
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold 
                        hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded
                        flex">
                        <Save className="mr-2" size={20} />
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}