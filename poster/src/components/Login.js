import { useState } from 'react';
import { Link } from "react-router-dom";

const Login = () => {
    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState("");

    const sendLogin = (e) => {
        e.preventDefault();

        const person = new FormData();
        person.append("username", emailOrUsername);
        person.append("password", password);
    }

    return (
        <form className="login-field" onSubmit={ sendLogin }>
            <h1 className="login-title">Log in to Poster</h1>
            <input type="text" className="login-input" placeholder="Email or Username" name="email-or-username" id="email-or-username" required onChange={(e) => setEmailOrUsername(e.target.value)} /><br />
            <input type="password" className="login-input" placeholder="Password" name="password" id="password" required onChange={(e) => setPassword(e.target.value)} /><br />
            <input type="submit" value="Log in" className="button" /><br />
            <Link className="login-sign-up-link" to="/registration">Sign up for Poster</Link>
        </form>
    )
}

export default Login;