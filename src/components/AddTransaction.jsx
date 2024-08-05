import { useContext, useState } from 'react';
import { TransactionContext } from './TransactionContext';

const AddTransaction = () => {
  const {addCredit, addDebit} = useContext(TransactionContext);
  const [amount, setAmount] = useState('');
  const [reason, setReason] = useState('');

  const handleAddCredit = () => {
    const value = parseFloat(amount);
    if(!isNaN(value) && value > 0){
      addCredit(value, reason);
      setAmount('');
      setReason('');
    }
  }

  const handleAddDebit = () => {
    const value = parseFloat(amount);
    if(!isNaN(value) && value > 0){
      addDebit(value, reason);
      setAmount('');
      setReason('');
    }
  }

  return (
        <div>
          <input type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-72 rounded-xl px-3 py-1 bg-zinc-800 text-white text-xl font-extralight outline-none m-1 shadow-xl"
            placeholder="Add transactions here..."
          />
          <input type="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-72 rounded-xl px-3 py-1 bg-zinc-800 text-white text-xl font-extralight outline-none m-1 shadow-xl"
            placeholder="Add a reason... (optional)"
          />
          <button
            onClick={handleAddCredit}
            className="text-white px-3 py-1 bg-green-500 text-xl rounded-md m-1 shadow-xl focus:opacity-75"
          >
            Add Credit
          </button>
          <button
            onClick={handleAddDebit}
            className="text-white px-3 py-1 bg-red-500 text-xl rounded-md m-1 shadow-xl focus:opacity-75"
          >
            Add Debit
          </button>
        </div>
      );
    }

    export default AddTransaction;














// function AddTransaction() {
//   const { setTransaction } = useContext(TransactionContext);
//   const [inputValue, setInputValue] = useState('');

//   const handleChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleClick = () => {
//     setTransaction(inputValue);
//     setInputValue(''); // Clear the input field after adding the transaction
//   };

//   return (
//     <div>
//       <input
//         value={inputValue}
//         onChange={handleChange}
//         className="w-72 rounded-xl px-3 py-1 bg-zinc-800 text-white text-xl font-extralight outline-none m-1 shadow-xl"
//         type="text"
//         placeholder="Add transactions here..."
//       />
//       <button
//         type="button"
//         onClick={handleClick}
//         className="text-white px-3 py-1 bg-zinc-800 text-xl rounded-md m-1 shadow-xl focus:opacity-75"
//       >
//         &#8593;
//       </button>
//     </div>
//   );
// }

// export default AddTransaction;