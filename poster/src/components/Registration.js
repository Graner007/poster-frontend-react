import axios from "axios";
import { useState } from "react";
import { Redirect } from 'react-router-dom';

const Registration = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthDate, setBirthDate] = useState();

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const person = {
            username,
            email,
            password,
            birthDate
        }

        axios.post("/registration", person)
        .then(res => {
            switch(res.data) {
                case "success":
                    setError(false);
                    setErrorMessage("");
                    setRedirect(true);
                    break;
                default:
                    setErrorMessage(res.data);
                    setError(true);
            }
        })
        .catch(err => console.log(err));
    }

    return (
        <form className="registraion-field" onSubmit={ handleSubmit }>
            <label htmlFor="username">Username:</label><br />
            <input type="text" placeholder="username..." name="username" id="username" required onChange={(e) => setUsername(e.target.value)} /><br />
            <label htmlFor="email">Email:</label><br />
            <input type="email" placeholder="email..." name="email" id="email" required onChange={(e) => setEmail(e.target.value)} /><br />
            <label htmlFor="password">Password:</label><br />
            <input type="password" placeholder="password..." name="password" id="password" required onChange={(e) => setPassword(e.target.value)} /><br />
            <label htmlFor="birthday">Birthday:</label><br />
            <input type="date" name="birthday" id="birthday" required onChange={(e) => setBirthDate(e.target.value)} /><br />
            <input type="submit" className="button" value="Registration" />
            { error && <div style={{ color: 'red' }}>{ errorMessage }</div> }
            { redirect && <Redirect to="/" /> }
        </form>
    )
}

export default Registration;