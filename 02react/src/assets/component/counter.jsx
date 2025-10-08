import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <p id="para">you have clicked {count}</p>
      <button
        id="btn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        clcik me
      </button>

      <button
        id="btn2"
        onClick={() => {
          setCount(count - 1);
        }}
      ></button>
    </div>
  );
};

export default Counter;
