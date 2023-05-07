import { useRef } from "react";


export const UncontrolledLogin = () => {


    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleReset = () => {
        usernameRef.current.value = '';
        passwordRef.current.value= '';
    };

    return(
        <div>
            <label>
                Username: 
                <input type="text"
                ref={usernameRef}/>
            </label>
            <label>
                Password: 
                <input type="password"
                ref={passwordRef}/>
            </label>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};