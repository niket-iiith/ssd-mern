import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css'; 

const Auth = ({ setLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegister, setIsRegister] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isRegister && password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const url = isRegister
            ? 'http://localhost:5000/api/auth/register'
            : 'http://localhost:5000/api/auth/login';

        try {
            const data = isRegister 
                ? { username, password }  
                : { username, password };
                
            const response = await axios.post(url, data, { withCredentials: true });
            alert(response.data.message);

            if (!isRegister) {
                setLoggedIn(true);
            }
        } catch (error) {
            alert(error.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <div className="container">
            <h2>{isRegister ? 'Register' : 'Login'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {isRegister && (
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                )}
                <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
            </form>
            <button onClick={() => setIsRegister(!isRegister)}>
                Switch to {isRegister ? 'Login' : 'Register'}
            </button>
        </div>
    );
};

export default Auth;
