import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleIncrement = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearInterval(handleIncrement);
  }, []);

  return <h1>Counter: {count}</h1>;
};

export default Counter;