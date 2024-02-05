import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthContext';

export const BASE_URL = 'http://localhost:8000';

function App() {
  const { authUser } = useAuth();

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route
          path='/'
          element={authUser ? <Home /> : <Navigate to='/login' />}
        />
        <Route
          path='/login'
          element={authUser ? <Navigate to='/' /> : <Login />}
        />
        <Route
          path='/signup'
          element={authUser ? <Navigate to='/' /> : <Signup />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
