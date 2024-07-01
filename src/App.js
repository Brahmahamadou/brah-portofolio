import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import CustomNavbar from './components/CustomNavbar';
import Content from './components/Content'; // Assurez-vous de l'importation correcte

function App() {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <CustomNavbar setActiveItem={setActiveItem} />
        <Content activeItem={activeItem} /> {/* Utilisation de Content avec activeItem */}
      </div>
    </div>
  );
}

export default App;
