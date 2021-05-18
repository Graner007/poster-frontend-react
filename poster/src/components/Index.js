import { Link } from "react-router-dom";

const Index = () => {
    return (
        <div className="index">
            <h1 className="index-main-title">Happening now</h1>
            <h3 className="index-second-title">Join Poster today.</h3>
            <button className="button index-button"><Link to="registration" className="sign-up-link">Sign up</Link></button><br />
            <button className="button index-button"><Link to="/login" className="login-link">Log in</Link></button>
        </div>
    )
}

export default Index;