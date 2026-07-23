import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {
  const [count, setCount] = useState(0);

  // Method to increment the counter
  const increment = () => {
    setCount(count + 1);
  };

  // Method to decrement the counter
  const decrement = () => {
    setCount(count - 1);
  };

  // Static message method
  const sayHello = () => {
    alert("Hello! This is a static message.");
  };

  // Increase button invokes multiple methods
  const handleIncrement = () => {
    increment();
    sayHello();
  };

  // Function which takes welcome as an argument
  const sayWelcome = (message) => {
    alert(message);
  };

  // Synthetic event
  const onPress = (event) => {
    alert("I was clicked");
    console.log(event);
  };

  return (
    <div>
      <h1>React Event Examples</h1>

      <h2>Counter: {count}</h2>

      <button onClick={handleIncrement}>
        Increment
      </button>

      <button onClick={decrement}>
        Decrement
      </button>

      <br />
      <br />

      <button onClick={() => sayWelcome("Welcome")}>
        Say Welcome
      </button>

      <br />
      <br />

      <button onClick={onPress}>
        Click on me
      </button>

      <hr />

      <CurrencyConvertor />
    </div>
  );
}

export default App;