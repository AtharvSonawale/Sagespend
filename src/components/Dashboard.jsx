// import { TransactionProvider } from "./TransactionContext";
import Balance from "./Balance";
import AddTransaction from "./AddTransaction";
import Chat from "./Chat";

function Dashboard() {
    return (
        <div className="m-4">
            {/* <TransactionProvider> */}
            <div className="rounded-lg px-2 py-1 bg-zinc-800 text-white text-2xl font-thin shadow-xl"><Balance /></div>
            <div className="space-y-80">
            <div className="max-h-72 h-auto my-2 rounded-lg px-2 py-1 bg-zinc-800 text-white text-2xl font-thin shadow-xl"><Chat /></div>
            <div className="flex justify-center outline-none px-1 py-1"><AddTransaction /></div>

                
            </div>
        {/* </TransactionProvider> */}
        </div>

    );
}

export default Dashboard;