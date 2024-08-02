import { createContext, useState } from "react";

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transaction, setTransaction] = useState('');

  return (
    <TransactionContext.Provider value={{ transaction, setTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};