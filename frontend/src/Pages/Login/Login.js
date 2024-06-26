import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import axios from 'axios';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const googleID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const { email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log('Form Data Changed:', formData);  // Log updated formData
  };

  const onSubmit = async e => {
    e.preventDefault();
    console.log('Form Submitted:', formData);  // Log formData before sending request
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      console.log('Response:', res);  // Log the entire response object for debugging
      const token = res.data.token;
      console.log('JWT Token:', token);  // Display the token in the console
      localStorage.setItem('token', token);
      setMessage('Login successful!');
      setIsLoggedIn(true);
      navigate('/courses'); // Redirect to course page
    } catch (err) {
      console.error('Error:', err);  // Log the error object for debugging
      if (err.response && err.response.data) {
        console.error('Error Response Data:', err.response.data);  // Log the specific error data
        setMessage(err.response.data.message || 'Login failed.');
      } else {
        setMessage('Login failed.');
      }
    }
  };

  const handleGoogleLoginSuccess = credentialResponse => {
    console.log('Google Login Success:', credentialResponse);
    // Hier können Sie die API-Anfrage für die Google-Anmeldung hinzufügen.
    setIsLoggedIn(true);
    navigate('/courses'); // Redirect to course page after Google login
  };

  const handleGoogleLoginFailure = error => {
    console.log('Google Login failed:', error);
  };

  console.log('Rendering Login Component...');  // Log when the component renders

  return (
    <GoogleOAuthProvider clientId={googleID}>
      <Header />
      <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
        <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
          <div
            className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
            style={{
              backgroundImage: `url(https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg)`,
            }}
          ></div>
          <div className="w-full p-8 lg:w-1/2">
            {message && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4" role="alert">
                <strong className="font-bold">{message}</strong>
              </div>
            )}
            {!isLoggedIn && (
              <form onSubmit={onSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Login
                </button>
              </form>
            )}
            <div className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
              <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={handleGoogleLoginFailure}
                render={renderProps => (
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-600 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign in with Google
                  </button>
                )}
              />
            </div>
            <div className="mt-4 flex items-center w-full text-center">
              <p>
                Don't have an account?{' '}
                <Link to="/register" className="text-indigo-600 hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </GoogleOAuthProvider>
  );
};

export default Login;