import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuth();

  const signin = async ({ username, password }) => {
    try {
      setLoading(true);
      const res = await fetch(`/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        return toast.error(data.message);
      }

      localStorage.setItem('authUser', JSON.stringify(data.user));
      setAuthUser(data.user);

      toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return [loading, signin];
};

export default useLogin;
