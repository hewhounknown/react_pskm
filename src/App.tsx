import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams, Outlet } from 'react-router-dom';
import AuthProvider from "./context/AuthContext";
import PrivateRoute from "./router/Route";
import { Login } from "./pages/Login/Login";

import { Sidebar } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";
import { AdminDashboard } from "./pages/Dashboard/AdminDashboard";
import { Patients } from "./pages/Patient/Patients";
import { PatientForm } from "./pages/Patient/PatientForm";
import { Doctors } from "./pages/Doctor/Doctors";
import { DoctorForm } from "./pages/Doctor/DoctorForm";
import { Appointment } from "./pages/Appointment/Appointment";
import { PatientProfile } from "./pages/Patient/PatientProfile";
import { DoctorProfile } from "./pages/Doctor/DoctorProfile";

import { DoctorDashboard } from "./pages/Dashboard/DoctorDashboard";
import { Medicines } from "./pages/Medicine/Medicines";


const App: React.FC = () => {

  return (
    <Router>
        <AuthProvider>
            <Routes>
                <Route path="/login" element={<Login />} />
                
                {/* admin portal */}
                <Route element={
                    <PrivateRoute roles={['admin']}>
                        <div className="flex w-screen h-screen overflow-hidden">
                            <Sidebar/>
                            <main className="flex-1 bg-gray-100 overflow-y-auto relative">
                                <div>
                                    <TopBar />
                                </div>
                                <div>
                                    <Outlet />
                                </div>
                            </main>
                        </div>
                    </PrivateRoute>
                }>
                    <Route index element={<AdminDashboard />} />
                    <Route path="/patients" element={<Patients />} />
                    <Route path="/new-patient-form" element={<PatientForm />} />
                    <Route path="/doctors" element={<Doctors />} />
                    <Route path="/new-doctor-form" element={<DoctorForm />} />
                    <Route path="/appointments" element={<Appointment />} />
                    <Route path="/medicines" element={<Medicines />} />
                    <Route path="/patients/profile/:id" element={<PatientProfileWrapper />} />
                    <Route path="/doctors/profile/:id" element={<DoctorProfileWrapper />} />
                </Route>

                {/* doctor portal    */}
                <Route element={
                    <PrivateRoute roles={['doctor']}>
                        <div className="flex w-screen h-screen overflow-hidden">
                            <Sidebar/>
                            <main className="flex-1 bg-gray-100 overflow-y-auto relative">
                                <div>
                                    <TopBar />
                                </div>
                                <div>
                                    <Outlet />
                                </div>
                            </main>
                        </div>
                    </PrivateRoute>
                }>
                    <Route path="/doc" element={<DoctorDashboard />} />
                    <Route path="/doc/patients" element={<Patients />} />
                    <Route path="/doc/appointments" element={<Appointment />} />
                    <Route path="/doc/medicines" element={<Medicines />} />
                </Route>
            </Routes>
        </AuthProvider>
    </Router>
  )
}

const PatientProfileWrapper: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    return <PatientProfile id={Number(id)} />;
}

const DoctorProfileWrapper: React.FC = () => {
    const {id} = useParams<{id: string}>();
    return <DoctorProfile id={String(id)} />
}

export default App;
