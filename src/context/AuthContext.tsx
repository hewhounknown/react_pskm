import React, {createContext, useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminData } from '../data/admins';
import { DoctorData } from '../data/doctors';


interface AuthContextType {
  user: User | null;
  login: (userName: string, password: string, userRole: string) => Promise<void>;
  logout: () => void;
};


interface User {
  id: string;
  email: string;
  password: string;
  roles: string[];
}

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [user, setUser] = useState<User | null>(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });
    const navigate = useNavigate();

    const login = async(email: string, password: string, userRole: string) => {
        try {
            if(userRole === "admin"){
              const admin = AdminData.find(u => u.email === email && u.password === password);
              if (admin) {
                  const userData = {
                    ...admin,
                    roles: ["admin"]
                  };
                  setUser(userData);
                  localStorage.setItem('user', JSON.stringify(userData));
                  navigate('/');
                  return;
              }
            } else if(userRole === 'doctor'){
              const doctor = DoctorData.find(d => d.email === email && d.password === password);
              if (doctor) {
                const userData = {
                  id: doctor.id,
                  email: doctor.email,
                  password: doctor.password,
                  roles: ["doctor"]
                };
                setUser(userData);
                localStorage.setItem('user', JSON.stringify(userData));
                navigate('/doc/');
                return;
              }
            }
            throw new Error("Invalid credentials");
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    const logout = () => {
      setUser(null);
      localStorage.removeItem('user');
      navigate('/login');
    }

    const value: AuthContextType = {
      user,
      login,
      logout
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};