import { useState, useRef } from "react";
import useCurrency from './myHooks/UseCurrency';
import Codes from './myHooks/Codes';
import "./App.css";

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);
 
  const option = useRef(null);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const currencyInfo = useCurrency(from);

  const countryOption = Object.keys(Codes);

  return (
    <>
      <div className="body w-full h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600">
        <div className="container flex flex-col w-full max-w-2xl bg-white p-7 rounded-lg gap-6 bg-opacity-90 shadow-lg">

          <div className="from flex flex-col sm:flex-row justify-between p-4 bg-white rounded shadow">
            <div className="left flex flex-col gap-2 mb-4 sm:mb-0">
              <p className="text-gray-700 font-semibold">From</p>
              <input
                className="w-full sm:w-48 outline-none bg-gray-100 text-black font-bold p-2 rounded"
                type="number" min={0}
                name="from"
                id="from"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="right flex flex-col gap-2 items-center">
              <p className="text-gray-700 font-semibold">Currency Code</p>
              <select 
                ref={option} 
                onChange={(e) => setFrom(e.target.value.toLowerCase())} 
                value={from.toUpperCase()} 
                className="outline-none rounded bg-gray-100 text-black border-gray-300 border p-2 font-semibold w-full sm:w-32"
                name="fromCurr" 
                id="fromCurr">
                {
                  countryOption.map((item) => {
                    return <option className="bg-blue-500 text-white" key={item} value={item}>{item}</option>
                  })
                }
              </select>
            </div>
          </div>

          <div className="relative w-full flex justify-center my-4">
            <button 
              className="rounded-full bg-blue-600 text-white px-4 py-2 shadow-md transform hover:scale-105 transition-transform"
              onClick={() => swap()}
            >
              Swap
            </button>
          </div>

          <div className="to flex flex-col sm:flex-row justify-between p-4 bg-white rounded shadow">
            <div className="left flex flex-col gap-2 mb-4 sm:mb-0">
              <p className="text-gray-700 font-semibold">To</p>
              <input
                className="w-full sm:w-48 outline-none bg-gray-100 text-black font-bold p-2 rounded"
                type="number"
                name="to"
                id="to"
                value={convertedAmount.toFixed(2)}
                readOnly
              />
            </div>
            <div className="right flex flex-col gap-2 items-center">
              <p className="text-gray-700 font-semibold">Currency Code</p>
              <select 
                onChange={(e) => setTo(e.target.value.toLowerCase())} 
                value={to.toUpperCase()} 
                className="outline-none rounded bg-gray-100 text-black border-gray-300 border p-2 font-semibold w-full sm:w-32"
                name="toCurr" 
                id="toCurr">
                {
                  countryOption.map((item) => {
                    return <option className="bg-blue-500 text-white" key={item} value={item}>{item}</option>
                  })
                }
              </select>
            </div>
          </div>

          <button 
            className="w-full bg-blue-600 text-white py-3 rounded shadow-lg font-semibold hover:bg-blue-700 transition-colors"
            onClick={() => setConvertedAmount(amount * currencyInfo[to])}
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
