import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const Auth = ({ onCloseModal, setTitleModal }) => {
  const [showLogin, setShowLogin] = useState(true);

  const showLoginForm = () => {
    setTitleModal('Iniciar Sesión');
    setShowLogin(true);
  };

  const showRegisterForm = () => {
    setTitleModal('Crear una cuenta');
    setShowLogin(false);
  };

  return showLogin ? (
    <LoginForm showRegisterForm={showRegisterForm} />
  ) : (
    <RegisterForm showLoginForm={showLoginForm} />
  );
};

export default Auth;
