import { useContext } from "react";
import { TransactionContext } from "./TransactionContext";

function TransactionHistory() {
  const { transaction } = useContext(TransactionContext);

  return (
    <div className="m-4">
      <h1 className="rounded-lg px-2 py-1 bg-zinc-800 text-white text-2xl font-thin shadow-xl">        Transaction History
      </h1>
      <section className="bg-white rounded-lg px-2 py-1 my-2 text-zinc-900 text-sm font-normal shadow-xl">
        <p>{transaction}</p>
      </section>
    </div>
  );
}

export default TransactionHistory;