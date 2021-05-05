import ProfileCard from "./ProfileCard";
import { useContext } from "react";
import { PersonContext } from "../contexts/PersonContext";

const FollowSidebar = () => {
    const { people } = useContext(PersonContext);

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