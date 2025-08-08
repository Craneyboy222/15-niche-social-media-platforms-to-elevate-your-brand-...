import { useState, useEffect } from 'react';
import { useApi } from './useApi';

interface AuthState {
  isAuthenticated: boolean;
  user: any;
  loading: boolean;
  error: string | null;
}

export function useAuth() {
  const [state, setState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    loading: true,
    error: null
  });

  const api = useApi();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await api.get('/api/users/me');
        setState({ isAuthenticated: true, user, loading: false, error: null });
      } catch (error) {
        setState({ isAuthenticated: false, user: null, loading: false, error: error.message });
      }
    };

    fetchUser();
  }, [api]);

  const login = async (username: string, password: string) => {
    try {
      const user = await api.post('/api/auth/login', { username, password });
      setState({ isAuthenticated: true, user, loading: false, error: null });
    } catch (error) {
      setState({ isAuthenticated: false, user: null, loading: false, error: error.message });
    }
  };

  const logout = () => {
    setState({ isAuthenticated: false, user: null, loading: false, error: null });
    // Implement logout logic, e.g., token removal
  };

  return { ...state, login, logout };
}