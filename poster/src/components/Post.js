import { useContext } from "react";
import { PersonContext } from "../contexts/PersonContext";
import { MediaContext } from "../contexts/MediaContext";

const Post = ({ post }) => {
    const { people } = useContext(PersonContext);
    const { medias } = useContext(MediaContext);

    const person = people.find((person) => person.id === post.personId);

    let media = null;

    if (post.hasImage || post.hasVideo) {
        media = medias.filter(media => media.postId === post.id);
    }

    return (
        <div className="post" key={ post.id }>
            <div className="profile-picture"><img src={ person.profileImageRoute } alt="profile-image"/></div>
            <div className="profile-name">{ person.username }</div>
            <div className="post-date">{ post.postDate }</div>
            <div className="post-message">{ post.message }</div>
            { post.hasImage ? media.map(image => <img src={ image.mediaRoute } />) : null }
            { post.hasVideo ? media.map(video => <video width="400px" controls><source src={ video.mediaRoute } /></video>) : null }
            <div className="adomCount">{ post.adomCount }</div>
            <div className="commentCount">{ post.commentCount }</div>
            <div className="shareCount">{ post.shareCount }</div>
        </div>
    )
}

export default Post;