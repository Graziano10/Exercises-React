import React, {useState, useCallback} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const hadleIncrement = useCallback(() => {
      setCount((prevCount) => prevCount +1)
    }, []);

    const hadleDecrement = useCallback(() => {
      setCount((prevCount) => prevCount -1)
    }, []);

    const handleReset = useCallback(() => {
      setCount(0)
    }, []);

    return(
        <div>
            <h3>Counter: {count}</h3>
            <button onClick={hadleIncrement}>Add</button>
            <button onClick={hadleDecrement}>Remove</button>
            <button onClick={handleReset}>reset</button>
        </div>
    );
};

export default Counter;