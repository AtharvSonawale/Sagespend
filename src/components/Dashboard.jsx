import Balance from "./Balance";
import AddTransaction from "./AddTransaction";
import Chat from "./Chat";

function Dashboard() {
  return (
    <div className="m-4 overflow-hidden">
      <div className="rounded-lg px-2 py-1 bg-zinc-800 text-white text-2xl font-thin shadow-xl">
        <Balance />
      </div>
      <div className="my-2 rounded-lg text-white h-96 max-h-96 overflow-y-auto">
        <Chat />
      </div>
      <div className="flex justify-center outline-none">
        <AddTransaction />
      </div>
    </div>
  );
}

export default Dashboard;
