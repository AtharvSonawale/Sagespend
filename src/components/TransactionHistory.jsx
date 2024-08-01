import { useContext } from "react";
import { TransactionContext } from "./TransactionContext";

function TransactionHistory() {

    const {transaction} = useContext(TransactionContext);

    return (
        <div>
            <h1 className="font-bold p-2 bg-zinc-800 m-2 text-2xl rounded-lg text-white">Transaction History</h1>
            <section className="bg-white font-semibold p-2 m-2 text-xl rounded-lg text-zinc-800 shadow-2xl">
                <p>{transaction}</p>
            </section>
        </div>
    );
}

export default TransactionHistory;