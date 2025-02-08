import React from "react";
import { LoginForm } from "./LoginForm";
import LoginLogoPath from "../../assets/imgs/pskm.png";


export const Login: React.FC = () => {

    return (
        <div className="flex w-screen h-screen grid grid-cols-3">
            <div className="col-span-2">
                <img className=" object-cover" src={LoginLogoPath} alt="" />
            </div>
            <div className="col-span-1 px-4 self-center">
                < LoginForm />
            </div>
        </div>
    )
}