import {BrowserRouter} from 'react-router-dom';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';

if (document.getElementById('app')) {
    ReactDOM.createRoot(document.getElementById('app')).render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    );
}