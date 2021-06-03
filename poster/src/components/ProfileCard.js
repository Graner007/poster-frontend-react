import { Link } from "react-router-dom";

const ProfileCard = ({ person }) => {
    return (
        <div className="profile-card" key={ person.id }>
            <Link to={ '/profile/' + person.id } className="profile-link">
                <img src={ person.profileImageId ? person.profileImageId : "/media/default-image" } alt="" className="who-to-follow-profile-image" />
                <div className="who-to-follow-username" >{ person.username }</div>
            </Link>
            <button className="button follow-button">Follow</button>
        </div>
    )
}

export default ProfileCard;