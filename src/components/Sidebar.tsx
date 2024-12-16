import React from 'react';
import {Link} from 'react-router-dom';

export const Sidebar: React.FC = () =>{
    
    return (
        <>
        <div className='w-64 bg-white shadow-md'>
            <nav className='p-4'>
                <Link 
                to={'/'} 
                className='flex items-center p-3 mb-2 rounded-lg'>
                    Dashboard
                </Link>
                <Link 
                to={'/doctors'} 
                className='flex items-center p-3 mb-2 rounded-lg'>
                    Doctor
                </Link>
                <Link 
                to={'/patients'} 
                className='flex items-center p-3 mb-2 rounded-lg'>
                    Patient
                </Link>

            </nav>
        </div>
        </>
    )
} 