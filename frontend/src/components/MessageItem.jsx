import { useAuth } from '../context/AuthContext';
import useConversations from '../store/useConversation';
import { extractTime } from '../utils/extractTime';

const MessageItem = ({ message }) => {
  const { authUser } = useAuth();
  const { selectedConversation } = useConversations();

  const forMe = message.senderId === authUser.id;
  const chatClassName = forMe ? 'chat-end' : 'chat-start';
  const chatBubbleClassName = forMe ? 'bg-blue-500' : '';
  const profilePic = forMe
    ? authUser.profilePic
    : selectedConversation.profilePic;
  const shakeClass = message.shouldShake ? 'shake' : '';

  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img alt='Tailwind CSS chat bubble component' src={profilePic} />
        </div>
      </div>
      <div
        className={`chat-bubble text-white ${chatBubbleClassName} ${shakeClass}`}
      >
        {message.message}
      </div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
        {extractTime(message.createdAt)}
      </div>
    </div>
  );
};

export default MessageItem;
