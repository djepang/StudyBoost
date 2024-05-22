import React from 'react';
import RegistrationForm from './RegistrationForm';
import GoogleAuth from './components/GoogleAuth';
import './LoginPage.css';

const LoginPage = () => {
    const handleLogin = () => {
        console.log('Logged in successfully');
        window.location.href = "/home";
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Login</h2>
                <button onClick={handleLogin} className="login-btn">Login</button>
                <h2>Or</h2>
                <GoogleAuth />
                <h2>Register</h2>
                <RegistrationForm />
            </div>
        </div>
    );
};

export default LoginPage;

