import React from "react";


interface MetricsProps{
    heartRate: number;
    bloodPressure: number;
    sugar: number;
}

export const ProgressBar: React.FC<MetricsProps> = (props) => {

    return (
        <div className="flex flex-col w-full gap-4 p-3 bg-white rounded-lg shadow-lg">
            <h2 className="text-lg font-bold text-gray-800">Health Metrics</h2>
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-green-700 dark:text-white">Heart Rate</span>
                <span className="text-sm font-medium text-green-700 dark:text-white">{props.heartRate}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div className="bg-green-400 h-2.5 rounded-full dark:bg-green-300" style={{width: `${props.heartRate}%`}}></div>
            </div>
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-yellow-700 dark:text-white">Blood Pressure</span>
                <span className="text-sm font-medium text-yellow-700 dark:text-white">{props.bloodPressure}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div className="bg-yellow-400 h-2.5 rounded-full" style={{width: `${props.bloodPressure}%`}}></div>
            </div>
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-indigo-700 dark:text-white">Sugar</span>
                <span className="text-sm font-medium text-indigo-700 dark:text-white">{props.sugar}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div className="bg-indigo-400 h-2.5 rounded-full dark:bg-indigo-500" style={{width: `${props.sugar}%`}}></div>
            </div>
        </div>
    )
}