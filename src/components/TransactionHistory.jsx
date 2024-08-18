import { useContext, useState } from "react";
import { TransactionContext } from "./TransactionContext";
import ConfirmationPopup from "./ConfirmationPopup";

const TransactionHistory = () => {
  const { transactions, deleteTransaction } = useContext(TransactionContext);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [transactionToDelete, setTransactionToDelete] = useState(null);

  const handleDeleteClick = (transactionId) => {
    setTransactionToDelete(transactionId);
    setPopupVisible(true);
  };

  const handleConfirmDelete = () => {
    deleteTransaction(transactionToDelete);
    setPopupVisible(false);
  };

  const handleCancelDelete = () => {
    setTransactionToDelete(null);
    setPopupVisible(false);
  };

  return (
    <div className="m-4 overflow-hidden rounded-lg">
      <div className="sticky top-0">
        <h1 className="rounded-lg px-2 py-1 bg-zinc-800 text-white text-2xl font-thin shadow-xl">
          Transaction History
        </h1>
      </div>
      <ul className="overflow-y-auto overflow-hidden max-h-[calc(100vh-80px)] mt-2 rounded-lg">
        {transactions.map((transaction, index) => (
          <li
            key={index}
            className="bg-white flex justify-between items-center rounded-lg px-2 py-1 my-1 text-gray-900 text-sm font-normal shadow-xl"
          >
            <span>
              ₹{transaction.amount.toFixed(2)}{" "}
              {transaction.reason ? `- ${transaction.reason}` : ""}
            </span>
            <button
              onClick={() => handleDeleteClick(transaction.id)}
              className="text-red-500 text-xs font-medium"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {isPopupVisible && (
        <ConfirmationPopup
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
};

export default TransactionHistory;
