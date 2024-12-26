import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";
import { Dashboard } from "./pages/Dashboard";
import { Patients } from "./pages/Patients";
import { PatientForm } from "./components/forms/PatientForm";
import { Doctors } from "./pages/Doctors";
import { DoctorForm } from "./components/forms/DoctorForm";
import { Appointment } from "./pages/Appointment";


const App: React.FC = () => {

  return (
    <Router>
        <div className="flex w-screen h-screen overflow-hidden">
            <Sidebar/>
            <main className="flex-1 bg-gray-100 overflow-y-auto relative">
                <div>
                    < TopBar />
                </div>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/patients" element={<Patients />} />
                <Route path="/new-patient-form" element={<PatientForm />} />
                <Route path="/doctors" element={<Doctors/>} />
                <Route path="/new-doctor-form" element={<DoctorForm/>} />
                <Route path="/appointments" element={<Appointment/>} />
              </Routes>
            </main>
        </div>
    </Router>
  )
}

export default App;

