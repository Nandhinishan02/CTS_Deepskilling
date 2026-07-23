import React, { useState } from "react";

function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [euros, setEuros] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const euroValue = Number(rupees) / 90;

    setEuros(euroValue.toFixed(2));

    alert(`Converting to Euro Amount is ${euroValue.toFixed(2)}`);
  };

  return (
    <div>
      <h1>Currency Convertor!!!</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount: </label>
          <input
            type="number"
            value={rupees}
            onChange={(event) => setRupees(event.target.value)}
            placeholder="Enter amount in INR"
          />
        </div>

        <div>
          <label>Currency: </label>
          <input type="text" value="Euro" readOnly />
        </div>

        <button type="submit">Convert</button>
      </form>

      {euros && (
        <h3>
          Euro Amount: €{euros}
        </h3>
      )}
    </div>
  );
}

export default CurrencyConvertor;