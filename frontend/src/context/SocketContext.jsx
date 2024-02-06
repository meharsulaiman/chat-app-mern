import { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import io from 'socket.io-client';

const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuth();

  useEffect(() => {
    if (authUser) {
      const socket = io('https://chat-mern-app-sulaiman.onrender.com', {
        query: {
          userId: authUser.id,
        },
      });

      setSocket(socket);
      socket.on('getOnlineUsers', (users) => {
        setOnlineUsers(users);
        console.log(users);
      });

      return () => {
        socket.close();
      };
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

// eslint-disable-next-line
export const useSocket = () => {
  return useContext(SocketContext);
};
