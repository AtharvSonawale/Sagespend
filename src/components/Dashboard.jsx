import Balance from "./Balance";
import AddTransaction from "./AddTransaction";

function Dashboard() {
    return (
        <div className="h-screen p-4 space-y-96">
            <div className="rounded-lg px-2 py-1 bg-neutral-700 text-white text-3xl font-bold shadow-lg"><Balance /></div>
            <div className="flex justify-center outline-none px-1 py-1"><AddTransaction /></div>
        </div>
    );
}

export default Dashboard;