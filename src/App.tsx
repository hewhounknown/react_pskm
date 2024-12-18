import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./pages/Dashboard";
import { Patients } from "./pages/Patients";
import { PatientForm } from "./components/forms/Patientform";


const App: React.FC = () => {

  return (
    <Router>
        <div className="flex w-screen h-screen overflow-hidden">
            <Sidebar/>
            <main className="flex-1 bg-gray-100 overflow-y-auto">
              
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/patients" element={<Patients />} />
                <Route path="/new-patient-form" element={<PatientForm />} />
              </Routes>
            </main>
        </div>
    </Router>
  )
}

export default App;

