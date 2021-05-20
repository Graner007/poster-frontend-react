import React from 'react'

const SearchBarBoxResults = ({ people }) => {
    return (
        <div className="search-bar-box">
            { people.map(person => (
                <h3 key={ person.id }>{ person.username }</h3>
            )) }
        </div>
    )
}

export default SearchBarBoxResults;