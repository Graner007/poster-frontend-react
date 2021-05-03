import { useContext } from "react";
import { PersonContext } from "../contexts/PersonContext";
import { MediaContext } from "../contexts/MediaContext";

const Post = ({ post }) => {
    const { people } = useContext(PersonContext);
    const { medias } = useContext(MediaContext);

    const person = people.find((person) => person.id === post.personId);

    return (
        <div className="post" key={ post.id }>
            <div className="profile-name">{ person.username }</div>
            <div className="post-date">{ post.postDate }</div>
            <div className="post-message">{ post.message }</div>
            <div className="adomCount">{ post.adomCount }</div>
            <div className="commentCount">{ post.commentCount }</div>
            <div className="shareCount">{ post.shareCount }</div>
        </div>
    )
}

export default Post;