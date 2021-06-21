import React from 'react';
import { Link } from "react-router-dom";

const SearchBarBoxResults = ({ people }) => {
    return (
        <div className="search-bar-box">
            { people.map(person => (
                <Link to={"/profile/" + person.id} className="profile-link" key={ person.id }>
                    <h3 key={ person.id }>{ person.username }</h3>
                </Link>
            ))}

        </div>
    )
}

export default SearchBarBoxResults;