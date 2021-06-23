import { useEffect, useState  } from "react";
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import PostList from "./PostList";
import axios from "axios";
import moment from "moment";

const Profile = () => {
    const { id } = useParams();
    const mediaUrl = "/media/";

    const [person, setPerson] = useState({});
    const [posts, setPosts] = useState([]);
    const [isCurrentPersonProfile, setIsCurrentPersonProfile] = useState(false);

    useEffect(() => {
        axios.get("/profile/"+id)
            .then(res => {
                setPerson(res.data.person);
                setIsCurrentPersonProfile(res.data.isLoggedPerson);
            })
            .catch(err => console.error(err));
    }, [id]);

    const sendFollow = () => {
        axios.post("/profile/"+id)
            .then(res => console.info(res))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        axios.get("/posts/profile/" + id)
        .then(res => setPosts(res.data.posts))
        .catch(err => console.error(err));
    }, [id])

    return (
        <div className="profile-page">
            <img src={ person.profileBackgroundImageId ? mediaUrl + person.profileBackgroundImageId : mediaUrl + "default-image" } alt="" className="profile-background-image" />
            <div className="before-bio">
                <div className="profile-image-container">
                    <img src={ person.profileImageId ? mediaUrl + person.profileImageId : mediaUrl + "default-image" } alt="" className="profile-image" />
                </div>
                 { isCurrentPersonProfile ? <Link to="/settings/profile" className="edit-profile-link"><button className="button">Edit profile</button></Link> : <button className="button profile-follow-button" onClick={ sendFollow }>Follow</button>}
            </div>
            <div className="bio">
                <div className="profile-name">{ person.username }</div>
                <div className="profile-registration-date"><i className="fa fa-calendar" /> Joined { moment(person.registrationDate).format("MM-DD-YYYY") }</div>
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
            { posts.length > 0 ? <PostList posts={ posts } /> : <div><b>No Posts avaiable</b></div> }
        </div>
    )
}

export default Profile;