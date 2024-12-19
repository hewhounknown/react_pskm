import React from 'react';
import {SearchIcon} from 'lucide-react'


export const SearchBox: React.FC = () => {
    return (
            <div className="w-full max-w-sm min-w-[200px] mx-auto mt-4">
                <div className="relative">
                    <input
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border 
                    border-slate-200 rounded-md pl-3 pr-28 py-3 h-auto transition duration-300 ease 
                    focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="patient name ..." 
                    />
                    <button
                    className="absolute top-1 right-1 flex items-center rounded bg-slate-800 py-1 px-2.5 
                    border border-transparent text-center text-sm text-white transition-all shadow-sm 
                    hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 
                    active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    >
                    <SearchIcon></SearchIcon>
                    
                </button>
            </div>
        </div>
    );
};
