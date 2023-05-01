import React, { useState, useEffect } from "react";
import CounterDisplay from "./counterDisplay ";

const Counter = ({ initialValue, incrementInterval, incrementAmount }) => {

  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    const handleIncrement = setInterval(() => {
      setCount((count) => count + incrementAmount);
    }, incrementInterval);

    return () => clearInterval(handleIncrement);
  }, [incrementInterval, incrementAmount]);

  return <CounterDisplay count={count} />;
};

export default Counter;