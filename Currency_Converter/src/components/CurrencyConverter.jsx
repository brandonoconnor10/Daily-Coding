/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState } from "react";
import './CurrencyConverter.css'


export const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  const rates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7
  };
  
  const convertedFrom = useMemo(() => {
    return amount / rates[fromCurrency];
  }, [amount, fromCurrency, rates]);

  return (
    <div className="converter">
  <h2>Currency Converter</h2>

  <div className="field-group">
    <label>Amount</label>
    <input
      type="number"
      value={amount}
      onChange={(e) => setAmount(Number(e.target.value))}
    />
  </div>

  <div className="field-group">
    <label>From Currency</label>
    <select
      value={fromCurrency}
      onChange={(e) => setFromCurrency(e.target.value)}
    >
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="GBP">GBP</option>
      <option value="JPY">JPY</option>
    </select>
  </div>

  <div className="field-group">
    <label>To Currency</label>
    <select
      value={toCurrency}
      onChange={(e) => setToCurrency(e.target.value)}
    >
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="GBP">GBP</option>
      <option value="JPY">JPY</option>
    </select>
  </div>

  <div className="result">
    {(convertedFrom * rates[toCurrency]).toFixed(2)} {toCurrency}
  </div>
</div>

  );
};
