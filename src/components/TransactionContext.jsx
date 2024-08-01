import { createContext, useState } from "react";

export const TransactionContext = createContext();

export const TransactionProvider = ({children}) => {
    const [transact, setTransact] = useState('');

    return(
        <TransactionContext.Provider value = {{transact,setTransact}}>
        {children}
        </TransactionContext.Provider>
    )
}