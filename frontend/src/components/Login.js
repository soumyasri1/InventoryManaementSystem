// components/Login.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {  ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../componentStyles/login.css';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in, and redirect to home if true
    if (localStorage.getItem('loggedInUser')) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok)
       {
        const data = await response.json();
        console.log('Login successful:', data);
       
        onLogin(data)
          navigate('/')
      }
        
       else {
        console.error('Login failed:', response.status);
        toast.error('Login failed')
         
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('Error during login');
    }
  };

  return (
    <div className="login-container">
      <h2>If registered Successfully,</h2>
      <h2>Please, login to continue</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit">Login</button>
      </form>
      <ToastContainer /> 
    </div>
  );
}

export default Login;
