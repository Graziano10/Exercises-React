import { useState } from "react";

const useFristCustomHooks = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const hadleIncrement = () => setCount((prevCount) => prevCount + 1);
  const hadleDecrement = () => setCount((prevCount) => prevCount - 1);
  const handleReset = () => setCount(initialValue);

  return { count, hadleIncrement, hadleDecrement, handleReset };
};

export default useFristCustomHooks;