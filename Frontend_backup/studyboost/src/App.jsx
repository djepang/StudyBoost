import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from './StartPage';
import Home from './HomePage';
import FutureComponent from './FutureComponent';
import Header from './Header';
import Login from './LoginPage';
import Contact from './ContactPage';
import About from './AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Routes>
      <div>
        <StartPage />
        <hr />
        <FutureComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;