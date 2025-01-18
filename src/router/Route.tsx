import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const auth = useAuth();
    const location = useLocation();

    if (!auth?.user) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return <>{children}</>;
};

export default PrivateRoute;