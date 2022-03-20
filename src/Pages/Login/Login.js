import React from 'react';
import {useHistory} from 'react-router-dom';
function Login() {
    const history = useHistory();
    const login =()=>{
        localStorage.setItem('accessert',true);
        history.replace("/Home")
    };
    
    return(
        <div>
            <h2>Login</h2>
            <input type="text" placeholder="Enter username"></input>
            <br/>
            <input type="password" placeholder="Enter password"></input>
            <br/>
            <button type="button" onClick={login}>Login</button>
        </div>
    );
}
export default Login;