import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <div className='bg-gradient-to-r from-green-400 to-blue-500 animate-gradient-animation css-selector'>
      <App />
    </div>
      
    </BrowserRouter>
  </React.StrictMode>
);
