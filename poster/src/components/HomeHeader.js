import { Link } from "react-router-dom";

const HomeHeader = ({ title }) => {
    return (
        <div className="home">
            <Link to={'/' + title}><h2 className="home-title">{ title }</h2></Link>
        </div>
    )
}

export default HomeHeader;