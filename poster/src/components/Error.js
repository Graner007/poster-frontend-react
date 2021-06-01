import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="error">
            <h3>Ooops...</h3>
            <p>Something went wrong</p>
            <Link to="/home">Go Back</Link>
        </div>
    )
}

export default Error;