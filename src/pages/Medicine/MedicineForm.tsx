import React, {useState} from "react";
import { AlertBox } from "../../components/AlertBox";
import {Save} from 'lucide-react'

interface MedicineFormState{
    name: string,
    dosage: string,
    qty: string,
    price: string,
    [key: string]: any
}

export const MedicineForm: React.FC = () => {

    const [formData, setFormData] = useState<MedicineFormState>({
        name: '',
        dosage: '',
        qty: '',
        price: ''
    });

    const [errors, setErrors] = useState<Partial<MedicineFormState>>({});
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const inputFields = [
        {name: "name", label: "Name *", type: "text", required: true},
        {name: "dosage", label: "Dosage *", type: "text", required: true},
        {name: "qty", label: "Qty *", type: "number", required: true},
        {name: "price", label: "Price *", type: "number", required: true}
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        const newErrors: Partial<MedicineFormState> = {};

        if(!formData.name.trim()) newErrors.name = 'name is required';
        if(!formData.dosage.trim()) newErrors.dosage = 'dosage is required';
        if(!formData.qty) newErrors.qty = 'qty is required';
        if(!formData.price) newErrors.price = 'price is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(validateForm()) {
            console.log('appointment data', formData);
            setAlertMessage('Added Appointment Successfully!');
            setShowAlert(true);

            setFormData({
                name: '',
                dosage: '',
                price: '',
                qty: ''
            })
        }
    }

    const closeAlert = () => {
        setShowAlert(false);
    };

    return (
        <div className="max-w-4xl p-3 mx-auto bg-white shadow-md rounded-lg">
        {showAlert && <AlertBox message={alertMessage} onClose={closeAlert} />}
       <div className="flex items-center mb-6">
           <h3 className="font-bold text-gray-800">New Medicine</h3>
       </div>
       <form onSubmit={handleSubmit}>
           <div className="flex flex-wrap -mx-2">
           {inputFields.map((field) => (
                   <div className="w-full md:w-1/2 px-2 mb-2" key={field.name}>
                       <label htmlFor={field.name} className="block text-gray-700 mb-2">{field.label}</label>
                       <div className="relative">  
                        <input 
                            type={field.type}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleInputChange}
                            className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2`}
                            placeholder={field.name === "availability" ? 'Mon-Fri 8am-5pm, Sat 3pm-9pm...' : ''} 
                        />
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