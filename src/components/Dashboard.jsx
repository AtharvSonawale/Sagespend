// import { TransactionProvider } from "./TransactionContext";
import Balance from "./Balance";
import AddTransaction from "./AddTransaction";

function Dashboard() {
    return (
        <div className="space-y-96 m-4">
            {/* <TransactionProvider> */}
            <div className="rounded-lg px-2 py-1 bg-zinc-800 text-white text-2xl font-thin shadow-xl"><Balance /></div>
            <div className="flex justify-center outline-none px-1 py-1"><AddTransaction /></div>
        {/* </TransactionProvider> */}
        </div>

    );
}

export default Dashboard;