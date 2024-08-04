import { useContext, useState } from 'react';
import { TransactionContext } from './TransactionContext';

function AddTransaction() {
  const { setTransaction } = useContext(TransactionContext);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setTransaction(inputValue);
    setInputValue(''); // Clear the input field after adding the transaction
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={handleChange}
        className="w-72 rounded-xl px-3 py-1 bg-zinc-800 text-white text-xl font-extralight outline-none m-1 shadow-xl"
        type="text"
        placeholder="Add transactions here..."
      />
      <button
        type="button"
        onClick={handleClick}
        className="text-white px-3 py-1 bg-zinc-800 text-xl rounded-md m-1 shadow-xl focus:opacity-75"
      >
        &#8593;
      </button>
    </div>
  );
}

export default AddTransaction;