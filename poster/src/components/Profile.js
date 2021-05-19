import { useContext } from "react";
import { useParams } from "react-router";
import { PersonContext } from '../contexts/PersonContext';

const Profile = () => {
    const { people, currentPerson } = useContext(PersonContext);
    const { id } = useParams();
    const intId = parseInt(id); 
    const person = people.find(person => person.id === intId);
    const isCurrentPersonProfile = currentPerson.id === intId ? true : false;

    return (
        <div className="profile-page">
            <img src={ person.profileBackgroundImageRoute } alt="" className="profile-background-image" />
            <div className="before-bio">
                <img src={ person.profileImageRoute } alt="" className="profile-image" />
                { isCurrentPersonProfile ? <button className="button edit-profile-button">Edit profile</button> : <button className="button edit-profile-button">Follow</button>}
            </div>
            <div className="bio">
                <div className="profile-name">{ person.username }</div>
                <div className="profile-registration-date"><i className="fa fa-calendar" /> Joined { person.registrationDate }</div>
                <div className="follow">
                    <div className="following"><b>{ person.followedCount }</b> Following</div>
                    <div className="follower"><b>{ person.followersCount }</b> Follower</div>
                </div>
            </div>
            <div className="profile-nav">
                <div className="profile-posts">Posts</div>
                <div className="profile-media">Media</div>
                <div className="profile-adoms">Adoms</div>
            </div>
        </div>
    )
}

export default Profile;