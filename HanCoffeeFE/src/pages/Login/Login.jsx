import React, { useState } from 'react';
import SignUpForm from '../../components/LoginForm/SignUpForm';
import SignInForm from '../../components/LoginForm/SignInForm';
import Toggle from '../../components/LoginForm/Toggle';
import './Login.css';

const Login = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className = 'wrap'>
      <div className={`container ${isActive ? 'active' : ''}`} id="container">
        <SignUpForm />
        <SignInForm />
        <Toggle 
          onRegisterClick={handleRegisterClick} 
          onLoginClick={handleLoginClick} 
        />
      </div>
    </div>
  );
};

export default Login;
