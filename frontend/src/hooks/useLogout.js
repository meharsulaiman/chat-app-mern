import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuth();

  const logout = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/auth/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error('Something went wrong');
      }

      // remove user from local storage
      localStorage.removeItem('authUser');
      // remove user from context
      setAuthUser(null);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;
