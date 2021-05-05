const ProfileCard = ({ person }) => {
    return (
        <div className="profile-card" key={ person.id }>
            <img src={ person.profileImageRoute } alt="" className="who-to-follow-profile-image" />
            <div className="who-to-follow-usename" >{ person.username }</div>
            <button className="button follow-button">Follow</button>
        </div>
    )
}

export default ProfileCard;