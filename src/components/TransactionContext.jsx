import { createContext, useState, useEffect } from "react";

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const [credits, setCredits] = useState([]);
  const [debits, setDebits] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("transactionData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setBalance(parsedData.balance);
      setCredits(parsedData.credits);
      setDebits(parsedData.debits);
      setTransactions(parsedData.transactions);
      setMessages(parsedData.messages);
    }
  }, []);

  useEffect(() => {
    const dataToSave = {
      balance,
      credits,
      debits,
      transactions,
      messages,
    };
    localStorage.setItem("transactionData", JSON.stringify(dataToSave));
  }, [balance, credits, debits, transactions, messages]);

  const addCredit = (amount, reason) => {
    const newTransaction = { id: Date.now(), amount, reason };
    setCredits([...credits, newTransaction]);
    setTransactions([...transactions, newTransaction]);
    setBalance(balance + amount);
    setMessages([
      ...messages,
      `Credited ₹${amount.toFixed(2)} ${reason ? `for ${reason}` : ""}`,
    ]);
  };

  const addDebit = (amount, reason) => {
    if (balance >= amount) {
      const newTransaction = { id: Date.now(), amount, reason };
      setDebits([...debits, newTransaction]);
      setTransactions([...transactions, newTransaction]);
      setBalance(balance - amount);
      setMessages([
        ...messages,
        `Debited ₹${amount.toFixed(2)} ${reason ? `for ${reason}` : ""}`,
      ]);
    } else {
      setMessages([
        ...messages,
        `Insufficient balance for a debit of ₹${amount.toFixed(2)}`,
      ]);
    }
  };

  const deleteTransaction = (transactionId) => {
    const updatedCredits = credits.filter(
      (credit) => credit.id !== transactionId
    );
    const updatedDebits = debits.filter((debit) => debit.id !== transactionId);
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== transactionId
    );

    const transaction = transactions.find(
      (transaction) => transaction.id === transactionId
    );
    if (transaction) {
      setBalance(
        transaction.amount >= 0
          ? balance - transaction.amount
          : balance + Math.abs(transaction.amount)
      );
    }

    setCredits(updatedCredits);
    setDebits(updatedDebits);
    setTransactions(updatedTransactions);
  };

  return (
    <TransactionContext.Provider
      value={{
        balance,
        credits,
        debits,
        transactions,
        messages,
        addCredit,
        addDebit,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
