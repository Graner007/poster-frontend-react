import { Link } from "react-router-dom";
import Registration from "./Registration";
import { useState } from "react";

const Index = () => {
    const [view, setView] = useState("none");

    return (
        <div className="index">
            <h1 className="index-main-title">Happening now</h1>
            <h3 className="index-second-title">Join Poster today.</h3>
            <button className="button index-button"><Link to="/registration" className="sign-up-link" onClick={() => setView("block")}>Sign up</Link></button><br />
            <button className="button index-button"><Link to="/login" className="login-link">Log in</Link></button>
            <Registration view={ view } setView={ setView } />
        </div>
    )
}

export default Index;