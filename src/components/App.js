import React, { useState } from 'react';
import { Register } from './';

function App () {
    const [token, setToken] = useState('');

    console.log(token)

    return(

        <div>
        
            <Register setToken={setToken} />

        </div>

    )
}
 
console.log( App )

export default App;