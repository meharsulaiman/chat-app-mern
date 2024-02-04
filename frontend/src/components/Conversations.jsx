import ConversationItem from './ConversationItem';

const Conversations = () => {
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      <ConversationItem />
      <ConversationItem />
      <ConversationItem />
      <ConversationItem />
    </div>
  );
};

export default Conversations;
