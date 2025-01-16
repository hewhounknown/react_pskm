import React, {useState} from "react";


interface LoginFormState{
    userName: string;
    password: string;
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

    return(
        <div>
            <form action="" className="space-y-4">
                {inputFields.map((field) => (
                    <div>
                        <label htmlFor="userName" className="block text-sm/6 font-medium text-gray-900">
                            {field.title}
                        </label>
                        <input 
                        type={field.type}
                        name={field.name} 
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 
                        outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 
                        focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 
                        sm:text-sm/6"/>
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