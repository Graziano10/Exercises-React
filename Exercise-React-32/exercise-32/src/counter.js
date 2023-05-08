import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIcrement = () => {
    setCount(count +1)
  };

  return (
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={handleIcrement}>Count</button>
      </div>
  );
};

export default Counter;