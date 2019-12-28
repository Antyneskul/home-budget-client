import React, { useState } from 'react';
import { useLocation, useHistory } from "react-router-dom";

const Login = () => {
    const history = useHistory();
    const location = useLocation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = evt => setEmail(evt.target.value);
    const handlePasswordChange = evt => setPassword(evt.target.value);

    const handleLogin = async (evt) => {
        evt.preventDefault();

        const response = await fetch('/auth/signIn', {
            method: 'POST',
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify({email, password})
        });

        if (response.status === 200) {
            const {token} = await response.json();
            const {from = '/'} = location.state || {};

            window.localStorage.setItem('token', token);
            history.push(from);
        }
    };

    return (
        <form>
            <input type="email" onChange={handleEmailChange}/>
            <input type="password" onChange={handlePasswordChange}/>
            <button type="submit" onClick={handleLogin}>Login</button>
        </form>
    );
};

export default Login;
