import { useContext, useState } from "react";
import { TransactionContext } from "./TransactionContext";

const AddTransaction = () => {
  const { addCredit, addDebit } = useContext(TransactionContext);
  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");

  const handleAddCredit = () => {
    const value = parseFloat(amount);
    if (!isNaN(value) && value > 0) {
      addCredit(value, reason);
      setAmount("");
      setReason("");
    }
  };

  const handleAddDebit = () => {
    const value = parseFloat(amount);
    if (!isNaN(value) && value > 0) {
      addDebit(value, reason);
      setAmount("");
      setReason("");
    }
  };

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-72 rounded-xl px-3 py-1 bg-zinc-800 text-white text-xl font-extralight outline-none m-1 shadow-xl"
        placeholder="Add transactions here..."
      />
      <input
        type="text"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        className="w-72 rounded-xl px-3 py-1 bg-zinc-800 text-white text-xl font-extralight outline-none m-1 shadow-xl"
        placeholder="Add a reason... (optional)"
      />
      <button
        onClick={handleAddCredit}
        className="font-thin text-white px-2 py-1 bg-green-500 text-xl rounded-xl mx-1 shadow-xl focus:opacity-75"
      >
        Credit
      </button>
      <button
        onClick={handleAddDebit}
        className="font-thin text-white px-2 py-1 bg-red-500 text-xl rounded-xl mx-1 shadow-xl focus:opacity-75"
      >
        Debit
      </button>
    </div>
  );
};

export default AddTransaction;
