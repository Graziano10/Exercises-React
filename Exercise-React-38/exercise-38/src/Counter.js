import useFristCustomHooks from './useFristCustomHooks';


const Counter = ({ initialValue }) => {
    const {count, hadleIncrement, hadleDecrement, handleReset} = useFristCustomHooks(initialValue);

    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={hadleIncrement}>Add</button>
            <button onClick={hadleDecrement}>Remove</button>
            <button onClick={handleReset}>reset</button>
        </div>
    );
};

export default Counter;