import ProfileCard from "./ProfileCard";
import { useEffect, useState } from "react";
import axios from "axios";

const FollowSidebar = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios.get("/follow-sidebar")
            .then(res => setPeople(res.data))
            .catch(err => console.log(err));
    });
 
    return (
        <div className='who-to-follow'>
            <h2 className="who-to-follow-title">Who To Follow</h2>
            { people.map(person => (
                <ProfileCard person={ person } />
            )) }
        </div>
    )
}

export default FollowSidebar;