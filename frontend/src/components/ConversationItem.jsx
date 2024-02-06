import useConversation from '../store/useConversation';
import Avatar from './Avatar';
import { useSocket } from '../context/SocketContext';

const ConversationItem = ({ conversation, emoji, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocket();
  const isOnline = onlineUsers.includes(conversation._id);

  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer transition ${
          isSelected ? 'bg-sky-500' : ''
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        {/* AVATAR */}
        <Avatar
          img={conversation.profilePic}
          status={isOnline ? 'online' : 'offline'} // online || offline
        />

        {/* NAME AND EMOJI */}
        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className='font-bold text-gray-200'>{conversation.fullName}</p>
            <span className='text-xl'>{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className='divider my-0 py-0 h-1' />}
    </>
  );
};

export default ConversationItem;
