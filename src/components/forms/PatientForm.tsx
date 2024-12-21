import React, { useState } from "react";
import { UserPlus, Save } from 'lucide-react';


interface PatientFormData {
    name: string;
    dateOfBirth: string;
    gender: string;
    contactNumber: string;
    email: string;
    address: string;
    guardian: string;
}

export const PatientForm: React.FC = () => {

    const [formData, setFormData] = useState<PatientFormData>({
        name: '',
        dateOfBirth: '',
        gender: '',
        contactNumber: '',
        email: '',
        address: '',
        guardian: ''
    });

    const [errors, setErrors] = useState<Partial<PatientFormData>>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
    };

    const validateForm = () => {
        const newErrors: Partial<PatientFormData> = {};
    
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
            contactNumber: '',
            email: '',
            address: '',
            guardian: ''
          });
        }
      };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-4">
            <div className="flex items-center mb-6">
                <UserPlus className="mr-3 text-blue-600" size={32} />
                <h2 className="text-2xl font-bold text-gray-800">New Patient Registration</h2>
            </div>
            <form onSubmit={handleSubmit} className="">
                {/*input block start*/}
                <div className="flex flex-wrap -mx-2">
                    
                    <div className="w-full md:w-1/2 px-2 mb-2">
                        <label htmlFor="name" className="block text-gray-700 mb-2">Name *</label>
                        <div className="relative">
                            <input 
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 `}/>
                            {errors.name && (
                                <span className="text-red-500 text-sm">{errors.name}</span>
                            )}
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 px-2 mb-2">
                        <label htmlFor="dateOfBirth" className="block text-gray-700 mb-2">Date of Birth *</label>
                        <div className="relative">
                            <input 
                                type="date"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleInputChange}
                                className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 `}/>
                            {errors.dateOfBirth && (
                                <span className="text-red-500 text-sm">{errors.dateOfBirth}</span>
                            )}
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 px-2 mb-2">
                        <label htmlFor="gender" className="block text-gray-700 mb-2">Gender *</label>
                        <div className="relative">
                            <select 
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                                className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2`}>
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                            </select>
                            {errors.gender && (
                                <span className="text-red-500 text-sm">{errors.gender}</span>
                            )}
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 px-2 mb-2">
                        <label htmlFor="contactNumber" className="block text-gray-700 mb-2">Contact Number *</label>
                        <div className="relative">
                            <input 
                                type="text"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleInputChange}
                                className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2`}/>
                            {errors.contactNumber && (
                                <span className="text-red-500 text-sm">{errors.contactNumber}</span>
                            )}
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 px-2 mb-2">
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email </label>
                        <div className="relative">
                            <input 
                                type="text" 
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2`}/>
                            {errors.email && (
                                <span className="text-red-500 text-sm">{errors.email}</span>
                            )}
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 px-2 mb-2">
                        <label htmlFor="address" className="block text-gray-700 mb-2">Address </label>
                        <div className="relative">
                            <input 
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2`}/>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 px-2 mb-2">
                        <label htmlFor="guardian" className="block text-gray-700 mb-2">Guardian *</label>
                        <div className="relative">
                            <input 
                                type="text"
                                name="guardian"
                                value={formData.guardian}
                                onChange={handleInputChange}
                                className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2`}/>
                            {errors.guardian && (
                                <span className="text-red-500 text-sm">{errors.guardian}</span>
                            )}
                        </div>
                    </div>

                </div>
                {/*input block end*/}

                <div className="mt-6 self-end">
                    <button 
                        type="submit" 
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold 
                        hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded
                        flex item-center">
                        <Save className="mr-2" size={20} />
                        Register
                    </button>
                </div>
            </form>
        </div>
    )
}