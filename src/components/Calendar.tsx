import React, { useState, useEffect } from "react";
import {ArrowLeft, ArrowRight} from 'lucide-react'
import { MonthNames } from "../data/months";
import { DaysOfWeek } from "../data/daysofweek";

interface CalendarProps {
    selectedDate: Date;
    onDateSelect: (date: Date) => void;
    appointments: any[];
}

export const Calendar: React.FC<CalendarProps> = ({selectedDate, onDateSelect, appointments}) => {
    const [current, setCurrent] = useState(new Date());
    const [days, setDays] = useState<number[]>([]);
    const [firstDay, setFirstDay] = useState(0);

    useEffect(() => {
        const fd = new Date(current.getFullYear(), current.getMonth(), 1).getDay();
        const dm = new Date(current.getFullYear(), current.getMonth() + 1, 0).getDate();
        setFirstDay(fd);
        setDays(Array.from({length: dm}, (_, i) => i + 1));
    }, [current]);

    const formatDate = (d: number) => {
        const year = current.getFullYear();
        const month = (current.getMonth() + 1).toString().padStart(2, '0');
        const day = d.toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="md:w-9/12 sm:w-10/12">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between px-6 py-3 bg-gray-700">
                          <button onClick={() => setCurrent(
                              prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))}>
                                <ArrowLeft/>
                          </button>
                        <h2 className="text-white">
                            {MonthNames[current.getMonth()]} {current.getFullYear()}
                        </h2>
                        <button onClick={() => setCurrent(
                            prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))}>
                              <ArrowRight/>
                        </button>
                    </div>
                    <div className="grid grid-cols-7 gap-2 p-4">
                        {DaysOfWeek.map(d => (
                          <div key={d} className="text-center font-semibold">{d}</div>
                        ))}
                        {Array.from({length: firstDay}).map((_, i) => <div key={`empty-${i}`}/>)}
                        {days.map(d => {
                            const today = new Date();
                            const date = formatDate(d);
                            const isToday = d === today.getDate() && 
                                current.getMonth() === today.getMonth() && 
                                current.getFullYear() === today.getFullYear();
                            const isSelected = d === selectedDate.getDate() && 
                                current.getMonth() === selectedDate.getMonth() && 
                                current.getFullYear() === selectedDate.getFullYear();
                            const hasAppts = appointments.some(appt => appt.date === date);

                          return (
                              <button
                                  key={d}
                                  onClick={() => onDateSelect(new Date(current.getFullYear(), current.getMonth(), d))}
                                  className={`text-center py-2 border rounded-lg cursor-pointer
                                      ${isToday ? 'border-blue-500' : ''}
                                      ${isSelected ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}
                                      ${hasAppts && !isSelected ? 'text-blue-600 font-medium' : ''}`}
                                      >
                                  {d}
                                  {hasAppts && <div className="w-1 h-1 bg-current rounded-full mx-auto mt-1"/>}
                              </button>
                          );
                      })}
                    </div>
                </div>
            </div>
        </div>
    );
};