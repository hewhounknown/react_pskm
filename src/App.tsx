import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Sidebar } from "./components/Sidebar";


const App: React.FC = () => {

  return (
    <Router>
        <div className="flex h-screen bg-gray-100">
            <Sidebar/>
        </div>
    </Router>
  )
}

export default App;

