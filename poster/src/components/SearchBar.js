import SearchBarBoxResults from "./SearchBarBoxResults";
import { useEffect, useState } from "react";
import axios from "axios";

const SearchBar = () => {
    const [people, setPeople] = useState([]);
    const [searchPhrase, setSearchPhrase] = useState("");
    const [onFocus, setOnfocus] = useState(false);
    
    const data = new FormData();

    data.append("searchPhrase", searchPhrase);

    useEffect(() => {
        axios.post("/search", data)
            .then(res => setPeople(res.data))
            .catch(err => console.log(err));
        
    }, [searchPhrase]);
    
    return (
        <div className="search-bar">
            <i className="fa fa-search"></i><input type="text" onFocus={() => setOnfocus(true)} onChange={(e) => setSearchPhrase(e.target.value)} placeholder="Search Poster" style={{ fontSize: "20px" }}/>
            { onFocus && searchPhrase.length > 0 && <SearchBarBoxResults people={ people } /> }
        </div>
    )
}

export default SearchBar;