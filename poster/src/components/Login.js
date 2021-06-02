import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const sendLogin = (e) => {
    e.preventDefault();

    const person = {
      username: name,
      password: password,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("/auth/login", person, config)
      .then((data) => {
        setLoggedIn(true);
      })
      .catch((data) => {
        if (data.response.status == 403) {
          setWrongCredentials(true);
        }
      });
  };

  return (
    <form className="login-field" onSubmit={sendLogin}>
      <h1 className="login-title">Log in to Poster</h1>
      <input
        type="text"
        className="input"
        placeholder="Username"
        name="name"
        id="name"
        required
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="password"
        className="input"
        placeholder="Password"
        name="password"
        id="password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <input type="submit" value="Log in" className="button" />
      <br />
      <Link className="login-sign-up-link" to="/registration">
        Sign up for Poster
      </Link>
      {wrongCredentials && (
        <div className="login-error-credentials">Wrong credentials!</div>
      )}
      {loggedIn && <Redirect to="/home" />}
    </form>
  );
};

export default Login;
