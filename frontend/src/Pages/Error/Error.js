import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import cuteAvatar from '../../assets/cute-avatar.png';
import './Error.css';

const Error = () => {
    return (
        <div className="error-wrapper">
            <Header />
            <div className="error-container">
                <div className="error-header">
                    <img src={cuteAvatar} alt="Cute Avatar" className="cute-avatar" />
                    <h1 className="error-title">Oops! Page not found</h1>
                </div>
                <p className="error-message">It seems we can't find the page you're looking for. Don't worry, you can go back to the homepage and continue your adventure!</p>
                <Link to="/" className="back-home-button">Go to Homepage</Link>
                <div className="error-footer">
                    <img src={cuteAvatar} alt="Cute Avatar Footer" className="cute-avatar-footer" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Error;
