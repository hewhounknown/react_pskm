import React, { useState } from "react";
import { UserPlus, Save } from 'lucide-react';


interface PatientFormState {
    name: string;
    dateOfBirth: string;
    gender: string;
    contactNumber: string;
    bloodType: string;
    email: string;
    address: string;
    guardian: string;
    [key: string]: string;
}

export const PatientForm: React.FC = () => {
    const [formData, setFormData] = useState<PatientFormState>({
        name: '',
        dateOfBirth: '',
        gender: '',
        bloodType: '',
        contactNumber: '',
        email: '',
        address: '',
        guardian: ''
    });

    const [errors, setErrors] = useState<Partial<PatientFormState>>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
    };

    const validateForm = () => {
        const newErrors: Partial<PatientFormState> = {};
    
        if (!formData.name.trim()) newErrors.name = 'Patient Name is required';
        if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of Birth is required';
        if (!formData.gender) newErrors.gender = 'Gender is required';
        if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact Number is required';
        if (!formData.guardian.trim()) newErrors.guardian = 'Guardian is required';
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email && !emailRegex.test(formData.email)) {
          newErrors.email = 'Invalid email format';
        }
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (validateForm()) {
          // TODO: Implement actual patient registration logic
          console.log('Patient Registration Data:', formData);
          alert('Patient Registered Successfully!');
          
          setFormData({
            name: '',
            dateOfBirth: '',
            gender: '',
            bloodType: '',
            contactNumber: '',
            email: '',
            address: '',
            guardian: ''
          });
        }
      };

    const inputFields = [
        { name: 'name', label: 'Name *', type: 'text', required: true },
        { name: 'dateOfBirth', label: 'Date of Birth *', type: 'date', required: true },
        { name: 'gender', label: 'Gender *', type: 'select', options: ['Select Gender', 'male', 'female', 'other'], required: true },
        { name: 'bloodType', label: 'Blood Type *', type: 'select', options: ['Select Blood Type', 'A', 'B', 'O', 'AB']},
        { name: 'contactNumber', label: 'Contact Number *', type: 'text', required: true },
        { name: 'email', label: 'Email', type: 'text' },
        { name: 'address', label: 'Address', type: 'text' },
        { name: 'guardian', label: 'Guardian *', type: 'text', required: true },
    ];

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-4">
            <div className="flex items-center mb-6">
                <UserPlus className="mr-3 text-blue-600" size={32} />
                <h2 className="text-2xl font-bold text-gray-800">New Patient Registration</h2>
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