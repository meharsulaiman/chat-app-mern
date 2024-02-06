import { useEffect } from 'react';
import { useSocket } from '../context/SocketContext';
import useConversation from '../store/useConversation';
import notificationSound from '../assets/notification.mp3';

const useListenMessages = () => {
  const { socket } = useSocket();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket.on('newMessage', (message) => {
      message.shouldShake = true;
      const audio = new Audio(notificationSound);
      audio.play();
      setMessages([...messages, message]);
    });

    return () => {
      socket.off('newMessage');
    };
  }, [socket, messages, setMessages]);
};

export default useListenMessages;
