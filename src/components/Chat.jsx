import { useContext, useEffect, useRef } from 'react';
import { TransactionContext } from './TransactionContext';

const Chat = () => {
  const { messages } = useContext(TransactionContext);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="overflow-y-auto rounded-lg overflow-hidden">
      <ul>
        {messages.map((message, index) => (
          <li key={index} className="bg-white flex justify-between items-center rounded-lg px-2 py-1 my-1 text-gray-900 text-sm font-normal shadow-xl">
            {message}
          </li>
        ))}
        <div ref={chatEndRef} />
      </ul>
    </div>
  );
};

export default Chat;
