import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage';
import '../css/app.css'

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <HomePage />
    </React.StrictMode>
);
