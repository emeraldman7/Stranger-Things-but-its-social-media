import React, { useState } from 'react';

function Register(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    console.log(username, password)

    return(
        <form>
            <input
            type="text"
            placeholder="enter username"
            onChange={(eventUser) => setUsername(eventUser.target.value)}
            />
            <input
            type="password"
            placeholder="enter password"
            onChange={(eventPass) => setPassword(eventPass.target.value)}
            />
        <button type="Log in">Log in</button>
        </form>
    )
}

export default Register;