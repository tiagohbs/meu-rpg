import React, { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Checkbox from '../ui/Checkbox';

interface LoginFormProps {
  onSubmit: (data: { username: string; password: string; rememberMe: boolean }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<{username?: string; password?: string}>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    const newErrors: {username?: string; password?: string} = {};
    
    if (!username.trim()) {
      newErrors.username = 'Username is required';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Clear any previous errors
    setErrors({});
    
    // Simulate loading (would be replaced by actual API call)
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onSubmit({ username, password, rememberMe });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="space-y-4">
        <Input
          label="Username"
          id="username"
          name="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={errors.username}
          fullWidth
          autoComplete="username"
        />
        
        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          fullWidth
          autoComplete="current-password"
        />
        
        <div className="flex items-center justify-between">
          <Checkbox
            id="remember-me"
            name="remember-me"
            label="Remember me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          
          <a href="#" className="text-sm text-red-400 hover:text-red-300 transition-colors">
            Forgot password?
          </a>
        </div>
        
        <Button
          type="submit"
          variant="primary"
          isLoading={isLoading}
          fullWidth
          className="mt-6 py-3 text-lg font-bold tracking-wide"
        >
          ENTER REALM
        </Button>
        
        <div className="mt-4 text-center">
          <p className="text-gray-400">
            New to the realm?{' '}
            <a href="#" className="text-red-400 hover:text-red-300 transition-colors">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;