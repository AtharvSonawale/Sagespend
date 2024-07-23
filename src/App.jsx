import { useState , useRef } from "react";
import Credit from "./components/Credit";
import Debit from "./components/Debit";
import TransactionHistory from "./components/TransactionHistory";
import Dashboard from "./components/Dashboard";

function App() {

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
        <div className="flex bg-slate-400">
            <div className="w-auto h-screen bg-gray-800 text-white flex flex-col items-start p-4 rounded-r-3xl">
              <button onClick={() => handleClick('Dashboard')} className="font-bold text-start p-2 m-2 hover:rounded-xl hover:bg-slate-600 duration-100">Dashboard</button>
              <button onClick={() => handleClick('Credit')} className="font-bold text-start p-2 m-2 hover:rounded-xl hover:bg-slate-600 duration-100">Credits</button>
              <button onClick={() => handleClick('Debit')} className="font-bold text-start p-2 m-2 hover:rounded-xl hover:bg-slate-600 duration-100">Debit</button>
              <button onClick={() => handleClick('TransactionHistory')} className="font-bold text-start p-2 m-2 hover:rounded-xl hover:bg-slate-600 duration-100">Transaction History</button>
            </div>

            <div className="w-screen h-screen overflow-auto bg-slate-400">
              {section === 'Dashboard' && (
                  <div ref={sectionRefs.Dashboard}><Dashboard /></div>
              )}

              {section === 'Credit' && (
                  <div ref={sectionRefs.Credit}><Credit /></div>
              )}

              {section === 'Debit' && (
                  <div ref={sectionRefs.Debit}><Debit /></div>
              )}

              {section === 'TransactionHistory' && (
                  <div ref={sectionRefs.TransactionHistory}><TransactionHistory /></div>
              )}
            </div>
        </div>
    );
}

export default App;