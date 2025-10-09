
// App.js
import React, { useState } from "react";
import "./App.css";
import Button from "./component/button";

function App() {
  const [count, setCount] = useState(0);

  function handleclick() {
    setCount(count + 1);
  }

  return (
    <>
      <Button handleClick={handleclick} text="Click me">
        <h1>{count}</h1>
      </Button>
    </>
  );
}

export default App;
