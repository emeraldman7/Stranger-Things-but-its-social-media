import React, { useState } from 'react';
import { registerUser } from '../AJAX requests';



function Register({ setToken }){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    

    async function handleSubmit(event) {
        event.preventDefault();
        const user= {username, password}


        const results = await registerUser(user)
            if (results.success) {
                setToken(results.data.token)
                window.localStorage.setItem("token", results.data.token)
            }
    }


    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="enter username"
            onChange={(user) => setUsername(user.target.value)}
            />
            <input
            type="password"
            placeholder="enter password"
            onChange={(pass) => setPassword(pass.target.value)}
            />
        <button type="accountCreate">Create Account</button>
        </form>
    )
}

export default Register;