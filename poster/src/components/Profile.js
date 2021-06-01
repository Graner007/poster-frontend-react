import { useContext  } from "react";
import { useParams } from "react-router";
import { PersonContext } from '../contexts/PersonContext';
import { Link } from 'react-router-dom';
import { PostContext } from "../contexts/PostContext";
import PostList from "./PostList";
import axios from "axios"; 

const Profile = () => {
    const { people, currentPerson } = useContext(PersonContext);
    const { posts } = useContext(PostContext);
    const { id } = useParams();
    const intId = parseInt(id);

    const person = people.find(person => person.id === intId);
    const isCurrentPersonProfile = currentPerson.id === intId ? true : false;
    const personPosts = posts.filter(post => post.personId === intId);

    const sendFollow = () => {
        const follow = new FormData();

        follow.append("followerId", currentPerson.id);

        axios.post("/profile/"+id, follow)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <div className="profile-page">
            <img src={ person.profileBackgroundImageRoute } alt="" className="profile-background-image" />
            <div className="before-bio">
                <div className="profile-image-container">
                    <img src={ person.profileImageRoute } alt="" className="profile-image" />
                </div>
                { isCurrentPersonProfile ? <Link to="/settings/profile" className="edit-profile-link"><button className="button">Edit profile</button></Link> : <button className="button profile-follow-button" onClick={ sendFollow }>Follow</button>}
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
            <PostList posts={ personPosts } />
        </div>
    )
}

export default Profile;