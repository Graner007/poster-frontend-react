import axios from "axios";
import { useState } from "react";
import { Redirect, useHistory } from 'react-router-dom';

const Registration = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthDate, setBirthDate] = useState();
    const [view, setView] = useState("block");

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [redirect, setRedirect] = useState(false);
    const history = useHistory();

    const closeRegistrationDialog = () => {
        setView("none");
        history.goBack();
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
            if (res.status === 200) {
                setError(false);
                setErrorMessage("");
                setRedirect(true);
            }
        })
        .catch(error => {
            if (error.response) {
              setErrorMessage(error.response.data);
              setError(true);
            }
        });
    }

    return (
        <div className="modal" style={{ display: view }}>
            <div className="modal-content">
                <span className="close" onClick={ closeRegistrationDialog }>&times;</span>
                <form className="registraion-field" onSubmit={ sendRegistration }>
                    <div className="register-inputs">
                        <input type="text" className="input" placeholder="Username" name="username" id="username" required onChange={(e) => setUsername(e.target.value)} /><br />
                        <input type="email" placeholder="Email" className="input" name="email" id="email" required onChange={(e) => setEmail(e.target.value)} /><br />
                        <input type="password" className="input" placeholder="Password" name="password" id="password" required onChange={(e) => setPassword(e.target.value)} /><br />
                        <input type="date" className="input" name="birthday" id="birthday" required onChange={(e) => setBirthDate(e.target.value)} /><br />
                    </div>
                    <div className="register-button">
                        <input type="submit" className="button" value="Registration" />
                    </div>
                    { error && <div style={{ color: 'red', padding: '10px' }}>{ errorMessage }</div> }
                    { redirect && <Redirect to="/login" /> }
                </form>
            </div>
        </div>
    )
}

export default Registration;