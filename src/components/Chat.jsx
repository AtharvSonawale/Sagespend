import { useContext } from 'react';
import { TransactionContext } from './TransactionContext';
TransactionContext
const Chat = () => {
  const { messages } = useContext(TransactionContext);

  return (
    <div>
      <h2 className="text-xl font-bold">Chat</h2>
      <ul className=''>
        {messages.map((message, index) => (
          <li key={index} className="max-h-72 h-auto text-base px-1 bg-zinc-700 rounded m-1">
            {message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chat;
