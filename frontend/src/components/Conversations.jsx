import useGetConversations from '../hooks/useGetConversations';
import ConversationItem from './ConversationItem';
import { getRandomEmoji } from '../utils/emojis';

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  console.log(conversations);
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversations.map((conversation, idx) => (
        <ConversationItem
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}

      {loading ? <span className='loading loading-spinner mx-auto' /> : null}
    </div>
  );
};

export default Conversations;
