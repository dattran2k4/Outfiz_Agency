import React from 'react';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import '../css/app.css';
import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      
      <Route path="/services" element={<ServicePage />} />
    </Routes>
    )
}

export default App;
