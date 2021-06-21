import { Link } from "react-router-dom";

const ProfileCard = ({ person }) => {
  const imageUrl = "http://localhost:8080/media/";

  return (
    <div className="profile-card">
      <Link to={"/profile/" + person.id} className="profile-link">
        <img
          src={
            person.profileImageId != null
              ? imageUrl + person.profileImageId
              : imageUrl + "default-image"
          }
          alt=""
          className="who-to-follow-profile-image"
        />
        <div className="who-to-follow-username">{person.username}</div>
      </Link>
      <button className="button follow-button">Follow</button>
    </div>
  );
};

export default ProfileCard;
