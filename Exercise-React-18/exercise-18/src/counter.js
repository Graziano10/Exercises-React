import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIcrement = () => {
    setCount(count +1)
  };

  return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <h1>Counter: {count}</h1>
        <button onClick={handleIcrement} style={{marginLeft: '20px', width: '100px', height: '30px', borderRadius: '5px',}}>Count</button>
      </div>
  );
};

export default Counter;
