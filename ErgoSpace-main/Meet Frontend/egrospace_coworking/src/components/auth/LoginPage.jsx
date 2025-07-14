
import React from 'react';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';
import '../../styles/LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-form-container">
          <h1>Welcome Back</h1>
          <p className="subtitle">Log in to your workspace account</p>
          
          <LoginForm />
          
          <p className="switch-form">
          Don't have an account? <Link to="/signup">Sign up here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;