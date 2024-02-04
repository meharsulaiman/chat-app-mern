import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { BASE_URL } from '../App';

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/api/auth/signup`, {
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
