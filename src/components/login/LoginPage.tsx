import React, { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Checkbox from '../ui/Checkbox';

interface LoginFormProps {
  onSubmit: (data: { username: string; password: string; rememberMe: boolean }) => void;
  isLoading: boolean; // Adicionada a prop isLoading
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, isLoading }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação simples
    const newErrors: { username?: string; password?: string } = {};

    if (!username.trim()) {
      newErrors.username = 'O nome de usuário é obrigatório';
    }

    if (!password) {
      newErrors.password = 'A senha é obrigatória';
    } else if (password.length < 6) {
      newErrors.password = 'A senha deve ter pelo menos 6 caracteres';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Limpa erros anteriores
    setErrors({});
    onSubmit({ username, password, rememberMe });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="space-y-4">
        <Input
          label="Nome de Usuário"
          id="username"
          name="username"
          placeholder="Digite seu nome de usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={errors.username}
          fullWidth
          autoComplete="username"
        />
        {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}

        <Input
          label="Senha"
          id="password"
          name="password"
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          fullWidth
          autoComplete="current-password"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

        <div className="flex items-center justify-between">
          <Checkbox
            id="remember-me"
            name="remember-me"
            label="Lembrar de mim"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />

          <a href="#" className="text-sm text-red-400 hover:text-red-300 transition-colors">
            Esqueceu a senha?
          </a>
        </div>

        <Button
          type="submit"
          variant="primary"
          isLoading={isLoading}
          fullWidth
          className="mt-6 py-3 text-lg font-bold tracking-wide"
          disabled={isLoading} // Desativa o botão enquanto está carregando
        >
          {isLoading ? 'Carregando...' : 'ENTRAR'}
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;