import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data); // Handle the response data
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Header />
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name=""
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded-lg mt-5">Register</button>
      </form>
      <Footer />
    </div>
  );
};

export default Register;



