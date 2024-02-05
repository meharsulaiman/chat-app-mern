import { useEffect, useState } from 'react';
import useConversation from '../store/useConversation';
import { toast } from 'react-hot-toast';

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation, messages, setMessages } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/messages/${selectedConversation._id}`);

        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await res.json();
        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { loading, messages };
};

export default useGetMessages;
