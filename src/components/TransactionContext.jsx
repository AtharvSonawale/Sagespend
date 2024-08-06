import { createContext, useState } from "react";

const TransactionContext = createContext();

const TransactionProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const [credits, setCredits] = useState([]);
  const [debits, setDebits] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [messages, setMessages] = useState([]);

  const addCredit = (amount, reason) => {
    setBalance(balance + amount);
    const creditTransaction = { id: Date.now(), type: 'credit', amount, reason, date: new Date() };
    setCredits([...credits, creditTransaction]);
    setTransactions([...transactions, creditTransaction]);
    setMessages([...messages, `Credited ₹${amount.toFixed(2)}${reason ? ` for ${reason}` : ''}`]);
  };

  const addDebit = (amount, reason) => {
    if (amount > balance) {
      setMessages([...messages, `Cannot debit ₹${amount.toFixed(2)} due to insufficient balance`]);
    } else {
      setBalance(balance - amount);
      const debitTransaction = { id: Date.now(), type: 'debit', amount, reason, date: new Date() };
      setDebits([...debits, debitTransaction]);
      setTransactions([...transactions, debitTransaction]);
      setMessages([...messages, `Debited ₹${amount.toFixed(2)}${reason ? ` for ${reason}` : ''}`]);
    }
  };

  const deleteTransaction = (id) => {
    const transaction = transactions.find((t) => t.id === id);
    if (transaction) {
      setTransactions(transactions.filter((t) => t.id !== id));
      if (transaction.type === 'credit') {
        setBalance(balance - transaction.amount);
        setCredits(credits.filter((c) => c.id !== id));
      } else {
        setBalance(balance + transaction.amount);
        setDebits(debits.filter((d) => d.id !== id));
      }
      setMessages([...messages, `Deleted transaction: ${transaction.type === 'credit' ? 'Credited' : 'Debited'} $${transaction.amount.toFixed(2)}${transaction.reason ? ` for ${transaction.reason}` : ''}`]);
    }
  };

  return (
    <TransactionContext.Provider value={{ balance, credits, debits, transactions, messages, addCredit, addDebit, deleteTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};

export { TransactionContext, TransactionProvider };
