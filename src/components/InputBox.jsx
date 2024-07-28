import React from 'react'
import Codes from  './Codes'


function InputBox({name,amount,onAmountChange,onCurrencyChange,currency,amountDisable}) {
    const countryOption = Object.keys(Codes)

  return (
    <div className=" flex justify-between p-[15px] bg-white rounded">
    <div className="flex flex-col gap-6">
      <p className="text-slate-700 font-semibold">{name}</p>
      <input
        className={`w-[300px] outline-none bg-white text-black font-bold ${amountDisable}`}
        type="number" min={0}
        name={name}
        id={name} 
        value={amount.toFixed(2)}
        onChange={(e)=>{onAmountChange && onAmountChange(Number(e.target.value))}}

        />
    </div>
    <div className="right flex flex-col items-center">
      <p className="text-slate-700 font-semibold">Currency Code</p>
      <div>
      <img src={`https://flagsapi.com/${Codes[currency.toUpperCase()]}/flat/64.png`} alt="" />
        <select onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}} value={currency.toUpperCase()} className="outline-none rounded bg-white text-black border-slate-300 border font-semibold" name="fromCurr" id="fromCurr">
        {
          countryOption.map((item) => {
          return  <option className="bg-blue-500 text-white " key={item} value={item}>{item}</option>
          })
        }
        
      </select></div>
    </div>
  </div>
  )
}

export default InputBox