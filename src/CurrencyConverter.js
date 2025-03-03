import { useState, useEffect } from "react";

export default function CurrencyConverter() {
  const [inputAmount, setInputAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [outputAmount, setOutputAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleInput(e) {
    const amount = Number(e.target.value);
    setInputAmount(amount);
  }

  function handleFromCurrency(e) {
    const currency = e.target.value;
    setFromCurrency(currency);
  }

  function handleToCurrency(e) {
    const currency = e.target.value;
    setToCurrency(currency);
  }

  useEffect(() => {
    async function convert() {
      setIsLoading(true);
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${inputAmount}&from=${fromCurrency}&to=${toCurrency}`
      );
      const data = await res.json();
      setOutputAmount(data?.rates?.[toCurrency]);
      setIsLoading(false);
    }

    if (!inputAmount) return;

    // if the same currency is selected, return the input amount
    if (fromCurrency === toCurrency) return setOutputAmount(inputAmount);

    convert();
  }, [inputAmount, fromCurrency, toCurrency]);

  function CurrencySelector({ currency, onChange, isLoading }) {
    return (
      <select value={currency} onChange={onChange} disabled={isLoading}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
    );
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter amount..."
        value={inputAmount}
        onChange={handleInput}
      />
      <CurrencySelector
        isLoading={isLoading}
        currency={fromCurrency}
        onChange={handleFromCurrency}
      />
      <CurrencySelector
        isLoading={isLoading}
        currency={toCurrency}
        onChange={handleToCurrency}
      />

      {outputAmount && (
        <p style={{ fontWeight: "semibold", marginTop: "20px" }}>
          {outputAmount} {toCurrency}
        </p>
      )}
    </div>
  );
}
