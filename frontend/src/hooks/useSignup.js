import { useState } from 'react';
import { toast } from 'react-hot-toast';

import { useAuth } from '../context/AuthContext';

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuth();

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    try {
      setLoading(true);
      const res = await fetch(`/api/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        return toast.error(data.message);
      }

      // If the user is successfully signed up, redirect to the login page and display a success message to the user and clear the form fields. store user in local storage
      localStorage.setItem('authUser', JSON.stringify(data.user));
      setAuthUser(data.user);

      toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return [loading, signup];
};

export default useSignup;
