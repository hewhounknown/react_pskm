import React, {useState} from "react";


interface LoginFormState{
    userName: string;
    password: string;
    [Key: string]: string;
}

export const LoginForm: React.FC = () => {

    const [FormData, setFormData] = useState<LoginFormState>({
        userName: '',
        password: ''
    });

    const [errors, setErrors] = useState<Partial<LoginFormState>>({});

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

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(validateForm()) {
            // login logic here:
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="space-y-4">
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