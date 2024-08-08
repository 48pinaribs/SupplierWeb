import React from 'react'
import './LoginForm.css'
import { FaUserAlt, } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import logo from "../assets/ozyer_logo.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function LoginForm() {
    const users = [
        { username: 'user1', password: 'pass1' },
        { username: 'user2', password: 'pass2' }
    ];
    const [errorMessage, setErrorMessage] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const checkUser = (username, password) => {
        const usercheck = users.find(user => user.username === username && user.password === password);
        if (usercheck) {
            return true;
        }
        return false;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (checkUser(username, password)) {
            navigate('/Home');
        } else {
            console.log("User not found or incorrect credentials");
            setErrorMessage("User not found or incorrect credentials");
        }
    }

    return (

        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <div> <a> <img src={logo} alt='logo' /> </a> </div>

                <div className="input-box">
                    <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} required />
                    <FaUserAlt className='icon' />
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
                    <FaLock className='icon' />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>

                <button type="button" onClick={handleSubmit} >Login</button>
                <p></p>
                <p></p>
                <p></p>
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </form>

        </div>


    )
}
export default LoginForm

