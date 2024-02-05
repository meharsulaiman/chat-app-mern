import { useEffect, useRef } from 'react';
import useGetMessages from '../hooks/useGetMessages';
import MessageItem from './MessageItem';
import MessageSkeleton from './MessageSkeletons';

const Messages = () => {
  const { loading, messages } = useGetMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [messages]);

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className='text-center'>Send a message to start the conversation</p>
      )}

      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <MessageItem message={message} />
          </div>
        ))}
    </div>
  );
};

export default Messages;
