import React, { useState } from 'react';
import LoginForm from './LoginForm';

interface LoginPageProps {
  onLogin: (token: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (data: { username: string; password: string; rememberMe: boolean }) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        onLogin(result.token); // Passa o token para o App
      } else {
        alert('Credenciais inválidas.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao conectar ao servidor.');
    } finally {
      setIsLoading(false);
    }
  };

  return <LoginForm onSubmit={handleLogin} isLoading={isLoading} />;
};

export default LoginPage;