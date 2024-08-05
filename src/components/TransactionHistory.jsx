import { useContext, useState } from "react";
import { TransactionContext } from "./TransactionContext";
import ConfirmationPopup from "./ConfirmationPopup";

const TransactionHistory = () => {
  const { transactions, deleteTransaction } = useContext(TransactionContext);
  const [transactionToDelete, setTransactionToDelete] = useState(null);

  const handleDelete = (id) => {
    setTransactionToDelete(id);
  }

  const confirmDelete = () => {
    deleteTransaction(transactionToDelete);
    setTransactionToDelete(null);
  }

  const cancelDelete = () => {
    setTransactionToDelete(null);
  }

  return(
    <div className="m-4">
      <h1 className="rounded-lg px-2 py-1 bg-zinc-800 text-white text-2xl font-thin shadow-xl">Transaction History</h1>
      <ul>
        {transactions.map((transaction) => (
        <li key={transaction.id} className="bg-white rounded-lg px-2 py-1 my-2 text-zinc-900 text-sm font-normal shadow-xl">
          <span>
            {transaction.type === 'credit' ? 'Credited' : 'Debited'} ${transaction.amount.toFixed(20)} {transaction.reason ? `- ${transaction.reason}` : ''} on {transaction.date.toLocaleString()}
          </span>
          <button onClick={()=> handleDelete(transaction.id)} className="px-1 py-1 bg-red-500 text-white rounded">Delete</button>
        </li>
      ))}
      </ul>
      {transactionToDelete !== null && (
        <ConfirmationPopup onConfirm={confirmDelete} onCancel={cancelDelete} />
      )}
    </div>
  )
}








// function TransactionHistory() {
//   const { transaction } = useContext(TransactionContext);

//   return (
//     <div className="m-4">
//       <h1 className="rounded-lg px-2 py-1 bg-zinc-800 text-white text-2xl font-thin shadow-xl">        Transaction History
//       </h1>
//       <section className="bg-white rounded-lg px-2 py-1 my-2 text-zinc-900 text-sm font-normal shadow-xl">
//         <p>{transaction}</p>
//       </section>
//     </div>
//   );
// }

export default TransactionHistory;