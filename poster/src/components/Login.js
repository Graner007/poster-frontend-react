import { useState } from 'react';
import { Link } from "react-router-dom";

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState("");

    const sendLogin = (e) => {
        e.preventDefault();

        const person = new FormData();
        person.append("name", name);
        person.append("password", password);
    }

    return (
        <form className="login-field" onSubmit={ sendLogin }>
            <h1 className="login-title">Log in to Poster</h1>
            <input type="text" className="input" placeholder="Email or Username" name="name" id="name" required onChange={(e) => setName(e.target.value)} /><br />
            <input type="password" className="input" placeholder="Password" name="password" id="password" required onChange={(e) => setPassword(e.target.value)} /><br />
            <input type="submit" value="Log in" className="button" /><br />
            <Link className="login-sign-up-link" to="/registration">Sign up for Poster</Link>
        </form>
    )
}

export default Login;