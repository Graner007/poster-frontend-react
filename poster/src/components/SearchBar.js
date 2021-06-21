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
        if (searchPhrase.length > 0) {
            axios.post("/search", data)
            .then(res => setPeople(res.data))
            .catch(err => console.error(err));
        }  
    }, [searchPhrase]);

    const handleOnBlur = () => {
        data.delete("searchPhrase");
        setPeople([]);
    }
    
    return (
        <div className="search-bar">
            <i className="fa fa-search"></i><input type="text" onBlur={() => handleOnBlur()} onFocus={() => setOnfocus(true)} onChange={(e) => setSearchPhrase(e.target.value)} placeholder="Search Poster" style={{ fontSize: "20px" }}/>
            { onFocus && searchPhrase.length > 0 && <SearchBarBoxResults people={ people } setPeople={ setPeople } /> }
        </div>
    )
}

export default SearchBar;