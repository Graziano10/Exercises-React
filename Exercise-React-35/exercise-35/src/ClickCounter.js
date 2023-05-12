import React, { useState, useEffect } from "react";

export const Counter = ({ props }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    props(count);
  }, [count, props]);

  useEffect(() => {
    const unmounts = setInterval(() => {
      setCount((prevCuont) => prevCuont + 1);
    }, 1000);

    return () => {
      clearInterval(unmounts);
    };
  }, []);

  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={handleIncrement}>Incremetn</button>
    </div>
  );
};
