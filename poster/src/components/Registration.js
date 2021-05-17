import axios from "axios";
import { useState } from "react";

const Registration = () => {

    const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState();

    const handleClick = () => {
        const data = {
            userName,
            email,
            password,
            birthday
        }

        axios.post("/registration", data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    return (
        <div className="registraion-field">
            <label htmlFor="username">Username:</label><br />
            <input type="text" placeholder="username..." name="username" id="username" required onChange={(e) => setUsername(e.target.value)} /><br />
            <label htmlFor="email">Email:</label><br />
            <input type="email" placeholder="email..." name="email" id="email" required onChange={(e) => setEmail(e.target.value)} /><br />
            <label htmlFor="password">Password:</label><br />
            <input type="password" placeholder="password..." name="password" id="password" required onChange={(e) => setPassword(e.target.value)} /><br />
            <label htmlFor="birthday">Birthday:</label><br />
            <input type="date" name="birthday" id="birthday" required onChange={(e) => setBirthday(e.target.value)} /><br />
            <input type="submit" className="button" value="Registration" onClick={ handleClick } />
        </div>
    )
}

export default Registration;