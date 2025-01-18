import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams, Outlet } from 'react-router-dom';
import { Sidebar } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";
import { Dashboard } from "./pages/Dashboard";
import { Patients } from "./pages/Patient/Patients";
import { PatientForm } from "./pages/Patient/PatientForm";
import { Doctors } from "./pages/Doctor/Doctors";
import { DoctorForm } from "./pages/Doctor/DoctorForm";
import { Appointment } from "./pages/Appointment/Appointment";
import { PatientProfile } from "./pages/Patient/PatientProfile";
import { DoctorProfile } from "./pages/Doctor/DoctorProfile";
import { Login } from "./pages/Login/Login";
import AuthProvider from "./context/AuthContext";
import PrivateRoute from "./router/Route";

const App: React.FC = () => {

  return (
    <Router>
        <AuthProvider>
            <Routes>
                <Route path="/login" element={<Login />} />
                
                {/* Main layout route with PrivateRoute */}
                <Route element={
                    <PrivateRoute>
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
                    {/* Protected nested routes */}
                    <Route index element={<Dashboard />} />
                    <Route path="/patients" element={<Patients />} />
                    <Route path="/new-patient-form" element={<PatientForm />} />
                    <Route path="/doctors" element={<Doctors />} />
                    <Route path="/new-doctor-form" element={<DoctorForm />} />
                    <Route path="/appointments" element={<Appointment />} />
                    <Route path="/patients/profile/:id" element={<PatientProfileWrapper />} />
                    <Route path="/doctors/profile/:id" element={<DoctorProfileWrapper />} />
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
