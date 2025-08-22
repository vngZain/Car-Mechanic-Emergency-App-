import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();



  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });

      if (response.status === 200) {
        alert('Login successful');
        localStorage.setItem('authToken', response.data.token);
        navigate('/next');
      }
    } catch (error) {
      if (error.response) {
        alert(' ' + error.response.data.message);
      } else {
        alert(' Login failed! Try again');
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>



        <label>Email Address</label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>
          Password <a href="#" >Forgot Password?</a>
        </label>
        <input
          type="password"
          placeholder="Enter 6 characters or more"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="remember">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          Remember me
        </div>

        <button onClick={handleLogin}>Login</button>

        <p>
          Don't have an account?{' '}
          <Link
            to="/signup"
            style={{ color: '#e11d48', fontWeight: 500, textDecoration: 'none' }}
          >
            Sign Up
          </Link>
        </p>



        <div className="social-buttons">
          <button className="google">
            <img src="https://img.icons8.com/color/20/000000/google-logo.png" alt="Google" />
            Google
          </button>
          <button className="facebook">
            <img
              src="https://img.icons8.com/ios-filled/20/3b5998/facebook-new.png"
              alt="Facebook"
            />
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
