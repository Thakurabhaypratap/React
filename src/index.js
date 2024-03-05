import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PasswordGenrator from './pr3/passwordgenrator';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div><App />
    <PasswordGenrator/>
    </div>
);

