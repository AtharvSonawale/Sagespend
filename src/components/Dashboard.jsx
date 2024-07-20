import Balance from "./Balance";
import AddTransaction from "./AddTransaction";

function Dashboard() {
    return (
        <div className="h-full p-4 space-y-96">
            <div className="border-2 rounded-lg px-2 py-1 bg-neutral-700 text-white text-3xl font-bold"><Balance /></div>
            <div className="flex justify-center outline-none"><AddTransaction /></div>
        </div>
    );
}

export default Dashboard;