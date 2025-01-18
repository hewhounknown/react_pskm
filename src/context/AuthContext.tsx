import React, {ContextType, createContext, useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminData } from '../data/admins';


interface AuthContextType {
  user: User | null;
  login: (userName: string, password: string) => Promise<void>;
  logout: () => void;
};


interface User {
  id: string;
  userName: string;
  password: string;
}

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    const login = async(userName: string, password: string) => {
        //replace actual login logic here:
        try {
            const user = AdminData.find(u => u.userName == userName && u.password == password);

            if (user) {
                setUser(user);
                navigate('/');
            }
              
            throw new Error("login failed");
          
        } catch (err) {
            console.error(err);
        }
    }

    const logout = () => {
      setUser(null);
      navigate('/login');
    }

    const value: AuthContextType ={
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