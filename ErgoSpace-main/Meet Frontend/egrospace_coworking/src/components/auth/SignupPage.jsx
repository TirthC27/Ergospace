
import React from 'react';
import SignupForm from './SignupForm';
import '../../styles/SignupPage.css';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>Create Your Account</h1>
        <p className="subtitle">Find and book the perfect remote workspace</p>
        <SignupForm />
      <p className="switch-form">
      Already have an account? <Link to="/login">Log in here</Link>
      </p>

      </div>
    </div>
  );
};

export default SignupPage;