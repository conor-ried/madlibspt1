import React, { useState } from "react";
import addCommas from "./addCommas";

function App() {
  const [number, setNumber] = useState("");
  const [formattedNumber, setFormattedNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formatted = addCommas(Number(number));
    setFormattedNumber(formatted);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Number:
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>
        <button type="submit">Format</button>
      </form>
      <div>Formatted Number: {formattedNumber}</div>
    </div>
  );
}

export default App;