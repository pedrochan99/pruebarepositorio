import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Se inicia la renderización del proyecto
// Root es un div con id root el cual está
// en el index del proyecto.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
