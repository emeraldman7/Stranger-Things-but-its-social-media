import React, { useState } from 'react';
import { Register } from './';

function App () {
    const [token, setToken] = useState('');

    if (window.localStorage.getItem("token")){
        setToken(window.localStorage.getItem("token"));
    }

    

    return(

        <div>
        
            <Register setToken={setToken} />

        </div>

    )
}
 
console.log( App )

export default App;