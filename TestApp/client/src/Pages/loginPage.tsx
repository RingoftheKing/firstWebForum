import React, { useState } from 'react';
import AuthService from '../Logic/AuthService';

const LoginPage = () => {
    const [name, setName] = useState('');

    const handleLogin = () => {
        AuthService.login(name);
    };

    const handleLogout = () => {
        AuthService.logout();
    };

    return (
        <div>
            <h2>Login Page</h2>
            <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default LoginPage;
