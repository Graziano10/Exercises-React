import React from 'react';
import useForm from './useForm'; 

export const Form = () => {
    const [fromValues, hadleForm, hadleLogout, handleReset] = useForm({username: '', password: ''});

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('Username', fromValues.username)
        localStorage.setItem('Password', fromValues.password)
    }; 

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input type="text" name='username' value={fromValues.username} onChange={(event) => hadleForm(event)}/>
                <label>Password: </label>
                <input type="Password" name='password' value={fromValues.password} onChange={(event) => hadleForm(event)}/>
                <button type="submit">Login</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={hadleLogout}>Logout</button>
            </form>
        </div>
    );
}; 