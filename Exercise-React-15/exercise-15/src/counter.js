import React, { useState, useEffect } from "react";

const Counter = ({ initialValue, incrementInterval, incrementAmount }) => {

  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    const handleIncrement = setInterval(() => {
      setCount((count) => count + incrementAmount);
    }, incrementInterval);

    return () => clearInterval(handleIncrement);
  }, [incrementInterval, incrementAmount]);

  return <h1> Counter: {count}</h1>;
};

export default Counter;
