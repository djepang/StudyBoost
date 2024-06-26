import React from 'react';
/* eslint-disable-next-line no-unused-vars */
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { UserAuthContextProvider } from './context/UserAuthContext';
import { ThemeProvider } from './context/ThemeProvider';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserAuthContextProvider>
        <ThemeProvider>
          <App /> 
        </ThemeProvider>
      </UserAuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
