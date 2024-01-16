// components/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../componentStyles/Register.css';

function Register() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:8000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, username, email, password }),
      });
  
      if (response.ok) 
      {
        const data = await response.json();
        console.log('Registration successful:', data);
          navigate('/login')// Navigate to login page after toast is closed
      }
        
       else 
      {
        console.error('Registration failed:', response.status);
        toast.error('Registration failed')
      }
    } catch (error) {
      console.error('Error during registration:', error);
      toast.error('Error during registration'); // Display error toast
    }
  };
  

  return (
    <div className="register-container">
      <h2 className="register-form-title">Please Register to continue,</h2>
      <form className="register-form">
        <label className="register-form-label">
          Name:
          <input className="register-form-input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label className="register-form-label">
          Username:
          <input className="register-form-input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label className="register-form-label">
          Email:
          <input className="register-form-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label className="register-form-label">
          Password:
          <input className="register-form-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button className="register-form-button" type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Register;
