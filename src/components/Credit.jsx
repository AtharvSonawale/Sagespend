import { useContext } from "react";
import { TransactionContext } from "./TransactionContext";

const Credit = () => {

    const {credits} = useContext(TransactionContext);

    return (
        <div className="m-4">
            <h1 className="rounded-lg px-2 py-1 bg-zinc-800 text-white text-2xl font-thin shadow-xl">Credits</h1>
            <ul>
            {credits.map((credit, index) => (
          <li key={index} className="bg-white rounded-lg px-2 py-1 my-2 text-gray-900 text-sm font-normal shadow-xl">
            ${credit.amount.toFixed(2)} {credit.reason ? `- ${credit.reason}` : ''}
          </li>
        ))}

            </ul>
        </div>
    );
}

export default Credit;