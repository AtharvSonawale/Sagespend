import { useState , useRef } from "react";
import Credit from "./components/Credit";
import Debit from "./components/Debit";
import TransactionHistory from "./components/TransactionHistory";
import Dashboard from "./components/Dashboard";

function App() {

    const [section, setSection] = useState(null);
    const sectionRefs = {
        Dashboard: useRef(null),
        Credit: useRef(null),
        Debit: useRef(null),
        TransactionHistory: useRef(null),
    };

    const handleClick = (sectionName) => {
        setSection(sectionName);
        setTimeout(() => {
            sectionRefs[sectionName].current.scrollIntoView({
                behavior: 'smooth'
            });
        },5000);
    };

    return (
        <div className="flex">
            <div className="w-1/6 h-screen bg-gray-800 text-white flex flex-col items-start p-4">
              <button onClick={() => handleClick('Dashboard')} className="my-4 font-bold">Dashboard</button>
              <button onClick={() => handleClick('Credit')} className="my-4 font-bold">Credits</button>
              <button onClick={() => handleClick('Debit')} className="my-4 font-bold border-2">Debit</button>
              <button onClick={() => handleClick('TransactionHistory')} className=" font-bold border-2 text-start mx-0 my-4">Transaction History</button>
            </div>

            <div className="w-screen p-4 overflow-auto bg-slate-400">
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