import React from "react";
import { LoginForm } from "../components/forms/LoginForm";


export const Login: React.FC = () => {

    return (
        <div className="grid grid-cols-4 gap-3 p-3">
            <div className="col-span-3">

            </div>
            <div className="col-span-1 p-2">
                < LoginForm />
            </div>
        </div>
    )
}