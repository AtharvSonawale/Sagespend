import { useContext, useState } from "react";
import { TransactionContext } from "./TransactionContext";
import ConfirmationPopup from "./ConfirmationPopup";

const TransactionHistory = () => {
  const { transactions, deleteTransaction } = useContext(TransactionContext);
  const [transactionToDelete, setTransactionToDelete] = useState(null);

  const handleDelete = (id) => {
    setTransactionToDelete(id);
  };

  const confirmDelete = () => {
    deleteTransaction(transactionToDelete);
    setTransactionToDelete(null);
  };

  const cancelDelete = () => {
    setTransactionToDelete(null);
  };

  return (
    <div className="m-4 overflow-hidden rounded-lg">
      <div className="sticky top-0">
        <h1 className="rounded-lg px-2 py-1 bg-zinc-800 text-white text-2xl font-thin shadow-xl">Transaction History</h1>
      </div>
      <ul className="overflow-y-auto overflow-hidden max-h-[calc(100vh-80px)] mt-2 rounded-lg">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className="bg-white flex justify-between items-center rounded-lg px-2 py-1 my-1 text-gray-900 text-sm font-normal shadow-xl"
          >
            <span>
              {transaction.type === 'credit' ? 'Credited' : 'Debited'} ${transaction.amount.toFixed(2)}{' '}
              {transaction.reason ? `- ${transaction.reason}` : ''} on {transaction.date.toLocaleString()}
            </span>
            <button
              onClick={() => handleDelete(transaction.id)}
              className="px-2 mx-2 bg-red-500 text-white rounded-md shadow-md"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {transactionToDelete !== null && (
        <ConfirmationPopup onConfirm={confirmDelete} onCancel={cancelDelete} />
      )}
    </div>
  );
};

export default TransactionHistory;
