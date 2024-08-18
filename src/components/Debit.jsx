import { useContext } from "react";
import { TransactionContext } from "./TransactionContext";

const Debit = () => {
  const { debits } = useContext(TransactionContext);

  return (
    <div className="m-4 overflow-hidden rounded-lg">
      <div className="sticky top-0">
        <h1 className="rounded-lg px-2 py-1 bg-zinc-800 text-white text-2xl font-thin shadow-xl">
          Debits
        </h1>
      </div>
      <ul className="overflow-y-auto overflow-hidden max-h-[calc(100vh-80px)] mt-2 rounded-lg">
        {debits.map((debit, index) => (
          <li
            key={index}
            className="bg-white flex justify-between items-center rounded-lg px-2 py-1 my-1 text-gray-900 text-sm font-normal shadow-xl"
          >
            <span>
              ₹{debit.amount.toFixed(2)}{" "}
              {debit.reason ? `- ${debit.reason}` : ""}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Debit;
