import React, {useState} from "react";
import { useAuth } from "../../context/AuthContext";


// enum UserRole{
//     Admin,
//     Doctor
// }

interface LoginFormState{
    userName: string;
    password: string;
    userRole: string;
    [Key: string]: string;
}

export const LoginForm: React.FC = () => {

    const [FormData, setFormData] = useState<LoginFormState>({
        userName: '',
        password: '',
        userRole: ''
    });

    const [errors, setErrors] = useState<Partial<LoginFormState>>({});

    const auth = useAuth();

    const inputFields = [
        {name: "userName", title: "User Name", type: "text", required: true},
        {name: "password", title: "Password", type: "password", required: true}
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
    };

    const validateForm = () => {
        const newErrors: Partial<LoginFormState> = {};

        if(!FormData.userName.trim()) newErrors.userName = "username is required";
        if(!FormData.password.trim()) newErrors.password = "password is required";
        if(!FormData.userRole) newErrors.userRole = "user role is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(validateForm()) {
            // login logic here:
            auth?.login(FormData.userName, FormData.password, FormData.userRole);
            return;
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center ps-3">
                            <input 
                                id="admin-role" 
                                type="radio" 
                                value="admin" 
                                name="userRole"
                                checked={FormData.userRole === 'admin'}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" 
                            />
                            <label htmlFor="admin-role" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Admin
                            </label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center ps-3">
                            <input 
                                id="doctor-role" 
                                type="radio" 
                                value="doctor" 
                                name="userRole"
                                checked={FormData.userRole === 'doctor'}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" 
                            />
                            <label htmlFor="doctor-role" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Doctor
                            </label>
                        </div>
                    </li>
                </ul>
                {errors.userRole && (
                    <span className="text-red-500 text-sm">{errors.userRole}</span>
                )}
                {inputFields.map((field) => (
                    <div>
                        <label htmlFor="userName" className="block text-sm/6 font-medium text-gray-900">
                            {field.title}
                        </label>
                        <input 
                        type={field.type}
                        name={field.name} 
                        value={FormData[field.name]}
                        onChange={handleInputChange}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 
                        outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 
                        focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 
                        sm:text-sm/6"/>
                        {field.required && errors[field.name] && (
                                    <span className="text-red-500 text-sm">{errors[field.name]}</span>
                        )}
                    </div>
                ))}

                <div>
                    <button type="submit" className="flex w-full justify-center rounded-md 
                    bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm 
                    hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
                    focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                </div>
            </form>
        </div>
    );
}