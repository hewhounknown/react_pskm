import React, { useState } from "react";
import { UserPlus, Save } from 'lucide-react';
import { AlertBox } from "../AlertBox";


interface DoctorFormState{
    name: string;
    dateOfBirth: string;
    role: string;
    gender: string;
    contactNumber: string;
    email: string;
    address: string;
    salary: string ;
    [key: string]: string;
}

export const DoctorForm: React.FC = () => {
    
    const [formData, setFormData] = useState<DoctorFormState>({
        name: '',
        dateOfBirth: '',
        role: '',
        gender: '',
        contactNumber: '',
        email: '',
        address: '',
        salary: '',
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
    };

    const [errors, setErrors] = useState<Partial<DoctorFormState>>({})
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const validateForm = () => {
        const newErrors: Partial<DoctorFormState> = {};

        if(!formData.name.trim()) newErrors.name = 'Doctor name is required';
        if(!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of Birth is required';
        if(!formData.role) newErrors.role = 'Role is required';
        if(!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact Number is required';
        if(!formData.salary) newErrors.salary = 'Salary is required'

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email && !emailRegex.test(formData.email)) {
          newErrors.email = 'Invalid email format';
        }
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (validateForm()) {
            console.log('Doctor Registration Data:', formData);
            setAlertMessage('Patient Registered Successfully!');
            setShowAlert(true);

            setFormData({
                name: '',
                dateOfBirth: '',
                role: '',
                gender: '',
                contactNumber: '',
                email: '',
                address: '',
                salary: '',
            })
        }
    }

    const closeAlert = () => {
        setShowAlert(false);
    }

    const inputFields = [
        { name: 'name', label: 'Name *', type: 'text', required: true },
        { name: 'dateOfBirth', label: 'Date of Birth *', type: 'date', required: true },
        { name: 'role', label: 'Role *', type: 'text', required: true },
        { name: 'gender', label: 'Gender *', type: 'select', options: ['Select Gender', 'male', 'female', 'other'], required: true },
        { name: 'contactNumber', label: 'Contact Number *', type: 'text', required: true },
        { name: 'email', label: 'Email', type: 'text'},
        { name: 'address', label: 'Address', type: 'text'},
        { name: 'salary', label: 'Salary *', type: 'number', required: true },
    ];

    return (
        <div className="max-w-4xl p-5 mx-auto bg-white shadow-md rounded-lg mt-4">
            {showAlert && <AlertBox message={alertMessage} onClose={closeAlert} />}
            <div className="flex items-center mb-6">
                <UserPlus className="mr-3 text-blue-600" size={32} />
                <h2 className="text-2xl font-bold text-gray-800">New Doctor Registration</h2>
            </div>
            <form onSubmit={handleSubmit}>
                {/*input block start*/}
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
                                        className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2`} />
                                )}
                                {field.required && errors[field.name] && (
                                    <span className="text-red-500 text-sm">{errors[field.name]}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                {/*input block end*/}

                <div className="mt-6">
                    <button 
                        type="submit" 
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold 
                        hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded
                        flex">
                        <Save className="mr-2" size={20} />
                        Register
                    </button>
                </div>
            </form>
        </div>
    )
}