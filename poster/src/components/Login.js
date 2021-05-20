import { useState } from 'react';
import { Link } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");

    const sendLogin = (e) => {
        e.preventDefault();

        const person = new FormData();
        person.append("username", username);
        person.append("email", email);
        person.append("password", password);
    }

    return (
        <form className="login-field" onSubmit={ sendLogin }>
            <h1 className="login-title">Log in to Poster</h1>
            <input type="text" className="input" placeholder="Username" name="username" id="username" required onChange={(e) => setUsername(e.target.value)} /><br />
            <input type="email" className="input" placeholder="Email" name="email" id="email" required onChange={(e) => setEmail(e.target.value)} /><br />
            <input type="password" className="input" placeholder="Password" name="password" id="password" required onChange={(e) => setPassword(e.target.value)} /><br />
            <input type="submit" value="Log in" className="button" /><br />
            <Link className="login-sign-up-link" to="/registration">Sign up for Poster</Link>
        </form>
    )
}

export default Login;