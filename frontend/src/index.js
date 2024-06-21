import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { UserAuthContextProvider } from './context/UserAuthContext';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider>
    <BrowserRouter>
      <UserAuthContextProvider>
        <App /> 
      </UserAuthContextProvider>
    </BrowserRouter>
   </ThemeProvider>
  </React.StrictMode>
);
