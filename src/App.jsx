import { useState, useRef } from "react";
import { TransactionProvider } from "./components/TransactionContext";
import Credit from "./components/Credit";
import Debit from "./components/Debit";
import TransactionHistory from "./components/TransactionHistory";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [section, setSection] = useState('Dashboard');
  const sectionRefs = {
    Dashboard: useRef(null),
    Credit: useRef(null),
    Debit: useRef(null),
    TransactionHistory: useRef(null),
  };

  const handleClick = (sectionName) => {
    setSection(sectionName);
  };

  return (
    <div className="flex font-semibold bg-zinc-900">
      <div className="w-auto h-auto my-4 bg-zinc-800 text-white flex flex-col items-start p-4 rounded-r-3xl text-s shadow-xl">
      <button onClick={() => handleClick('Dashboard')} className="text-start py-2 px-4 m-2 rounded-xl bg-zinc-700 hover:bg-zinc-600 duration-100 border-zinc-50 hover:shadow-xl focus:border focus:rounded-xl focus:bg-white focus:text-black">Dashboard</button>
        <button onClick={() => handleClick('Credit')} className="text-start py-2 px-4 m-2 rounded-xl bg-zinc-700 hover:bg-zinc-600 duration-100 border-zinc-50 hover:shadow-xl focus:text-green-500 focus:border focus:rounded-xl focus:bg-white">Credits</button>
        <button onClick={() => handleClick('Debit')} className="text-start py-2 px-4 m-2 rounded-xl bg-zinc-700 hover:bg-zinc-600 duration-100 border-zinc-50 hover:shadow-xl focus:text-red-500 focus:border focus:rounded-xl focus:bg-white">Debit</button>
        <button onClick={() => handleClick('TransactionHistory')} className="text-start py-2 px-4 m-2 rounded-xl bg-zinc-700 hover:bg-zinc-600 duration-100 border-zinc-50 hover:shadow-xl focus:text-yellow-500 focus:border focus:rounded-xl focus:bg-white">Transaction History</button>
      </div>

      <div className="w-screen h-screen overflow-auto bg-zinc-900">
          <TransactionProvider>
          {section === 'Dashboard' && <div ref={sectionRefs.Dashboard}><Dashboard /></div>}
          {section === 'Credit' && <div ref={sectionRefs.Credit}><Credit /></div>}
          {section === 'Debit' && <div ref={sectionRefs.Debit}><Debit /></div>}
          {section === 'TransactionHistory' && <div ref={sectionRefs.TransactionHistory}><TransactionHistory /></div>}
        </TransactionProvider>
      </div>
    </div>
  );
}

export default App;