import { useContext } from "react";
import { PersonContext } from '../contexts/PersonContext';

const Profile = ({ id }) => {
    const { people } = useContext(PersonContext);
    const person = people.find(person => person.id === id);

    return (
        <div className="profile-page">
            <img src={ person.profileBackgroundImageRoute } alt="" className="profile-background-image" />
            <div className="before-bio">
                <img src={ person.profileImageRoute } alt="" className="profile-image" />
                <button className="button edit-profile-button">Edit profile</button>
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