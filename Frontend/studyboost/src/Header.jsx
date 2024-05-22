// src/Header.jsx
import React from 'react';
import './Header.css';
import logo from './Logo.png';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo-container">
                    <img src={logo} alt="StudyBoost Logo" className="logo" />
                </div>
                <h1 className="header-title">StudyBoost</h1>
                <nav className="header-nav">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/login">login</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
