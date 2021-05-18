import axios from "axios";
import { useState } from "react";
import { Redirect } from 'react-router-dom';

const Registration = ({ view, setView }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthDate, setBirthDate] = useState();

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [redirect, setRedirect] = useState(false);

    const closeRegistrationDialog = () => {
        setView("none");
        setRedirect(true);
    }

    const sendRegistration = (e) => {
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
        <div id="myModal" className="modal" style={{ display: view }}>
            <div className="modal-content">
                <span className="close" onClick={ closeRegistrationDialog }>&times;</span>
                <form className="registraion-field" onSubmit={ sendRegistration }>
                    <div className="register-inputs">
                        <input type="text" className="register-input" placeholder="Username" name="username" id="username" required onChange={(e) => setUsername(e.target.value)} /><br />
                        <input type="email" placeholder="Email" className="register-input" name="email" id="email" required onChange={(e) => setEmail(e.target.value)} /><br />
                        <input type="password" className="register-input" placeholder="Password" name="password" id="password" required onChange={(e) => setPassword(e.target.value)} /><br />
                        <input type="date" className="register-input" name="birthday" id="birthday" required onChange={(e) => setBirthDate(e.target.value)} /><br />
                    </div>
                    <div className="register-button">
                        <input type="submit" className="button" value="Registration" />
                    </div>
                    { error && <div style={{ color: 'red' }}>{ errorMessage }</div> }
                    { redirect && <Redirect to="/" /> }
                </form>
            </div>
        </div>
    )
}

export default Registration;