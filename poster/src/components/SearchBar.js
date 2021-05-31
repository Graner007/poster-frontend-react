import SearchBarBoxResults from "./SearchBarBoxResults";
import { useEffect, useState } from "react";
import axios from "axios";

const SearchBar = () => {
    const [people, setPeople] = useState([]);
    const [searchPhrase, setSearchPhrase] = useState("");
    const [onFocus, setOnfocus] = useState(false); 

    /* useEffect(() => {
        axios.post("/home", searchPhrase)
            .then(res => setPeople(res.data))
            .catch(err => console.log(err));
        
    }, [searchPhrase]); */
    
    return (
        <div className="search-bar">
            <i className="fa fa-search"></i><input type="text" onFocus={() => setOnfocus(true)} onChange={(e) => setSearchPhrase(e.target.value)} placeholder="Search Poster" style={{ fontSize: "20px" }}/>
            { onFocus && <SearchBarBoxResults people={ people } /> }
        </div>
    )
}

export default SearchBar;