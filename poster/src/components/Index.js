import { Link } from "react-router-dom";
import Registration from "./Registration";

const Index = () => {
    return (
        <div className="index">
            <h1 className="index-main-title">Happening now</h1>
            <h3 className="index-second-title">Join Poster today.</h3>
            <a href="/registration" className="sign-up-link"><button className="button index-button">Sign up</button></a><br />
            <Link to="/login" className="login-link"><button className="button index-button">Log in</button></Link>
            <Registration />
        </div>
    )
}

export default Index;