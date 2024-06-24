import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import './Register.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const errors = {};

        if (!username) {
            errors.username = 'Username is required';
        }

        if (!email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid';
        }

        if (!password) {
            errors.password = 'Password is required';
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length === 0) {
            // Registration logic here (e.g., send data to API)
            navigate('/');
        } else {
            setErrors(errors);
        }
    };

    return (
      <div>
        < Header/ >
        <div className="register-container">
            <h1 className="register-title">Register</h1>
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={errors.username ? 'error-input' : ''}
                    />
                    {errors.username && <span className="error-text">{errors.username}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={errors.email ? 'error-input' : ''}
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={errors.password ? 'error-input' : ''}
                    />
                    {errors.password && <span className="error-text">{errors.password}</span>}
                </div>
                <button type="submit" className="register-button">Register</button>
            </form>
        </div>
        < Footer/ >
      </div>
    );
};

export default Register;