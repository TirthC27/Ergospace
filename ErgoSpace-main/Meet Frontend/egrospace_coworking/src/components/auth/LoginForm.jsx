import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/LoginPage.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const response = await fetch('http://192.168.226.93:8000/auth/login/', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();

      const storetoken = data.Token

      const userData = (data) => {
        localStorage.setItem('token',storetoken);
      };

      localStorage.setItem('token',storetoken);

      const token = localStorage.getItem("token")
      console.log(token)

      // console.log(data)
      // console.log(storetoken)

      if (response.ok) {
        console.log('Login successful:', data);
        console.log('Cookies:', document.cookie);
        navigate('/workspaces');

        if (data.user_type === 'provider') {
          navigate('/dashboard');
        } else if (data.user_type === 'customer') {
          navigate('/workspaces');
        } else {
          console.error('Unknown user role:', data.user_type);
        }

      } else {
        setErrors({ login: data.detail || 'Invalid email or password' });
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ login: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      {errors.login && <div className="error-message">{errors.login}</div>}

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-options">
        <div className="remember-me">
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
          <label htmlFor="rememberMe">Remember me</label>
        </div>

        <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
      </div>

      <button type="submit" className="submit-btn" disabled={loading}>
        {loading ? 'Logging in...' : 'Log In'}
      </button>

      <p className="signup-link">
        Don't have an account? <Link to="/signup">Sign up here</Link>
      </p>
    </form>
  );
};

export default LoginForm;
