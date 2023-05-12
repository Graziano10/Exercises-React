import React, {useState, useEffect} from 'react'

export const Counter = ({props}) => {
    const [count, setCount] = useState(0);


    useEffect(() => {
        props(count);
    }, [count, props]);

    const handleIncrement = () => {
        setCount(count + 1);
      };


    return(
        <div>
            <h1>Counter {count}</h1>
            <button onClick={handleIncrement}>Incremetn</button>

        </div>
    );
};