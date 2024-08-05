import { useContext } from "react";
import { TransactionContext } from "./TransactionContext";
TransactionContext;

const Debit = () => {
    const {debits} = useContext(TransactionContext);

    return (
                <div className="m-4">
                    <h1 className="rounded-lg px-2 py-1 bg-zinc-800 text-white text-2xl font-thin shadow-xl">Debits</h1>
                    <ul>
                        {debits.map((debit, index) => (
                        <li key={index} className="bg-white rounded-lg px-2 py-1 my-2 text-gray-900 text-sm font-normal shadow-xl">
                            ${debit.amount.toFixed(2)}{debit.reason ? `- ${debit.reason}` : ''}
                        </li>
                        ))}
                    </ul>
                </div>
            );
}


// function Debit() {
//     return (
//         <div className="m-4">
//             <h1 className="rounded-lg px-2 py-1 bg-zinc-800 text-white text-2xl font-thin shadow-xl">Debits</h1>
//             <section className="bg-white rounded-lg px-2 py-1 my-2 text-gray-900 text-sm font-normal shadow-xl">
//                 <p>HI</p>
//             </section>
//         </div>
//     );
// }

export default Debit;