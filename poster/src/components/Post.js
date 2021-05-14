import { useContext } from "react";
import { PersonContext } from "../contexts/PersonContext";
import { MediaContext } from "../contexts/MediaContext";
import { Link } from "react-router-dom";

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
            <div className="post-header">
                <Link to={ '/profile/' + person.id } className="profile-link">
                    <div className="profile-picture"><img src={ person.profileImageRoute } alt=""/></div>
                    <div className="profile-name">{ person.username }</div>
                </Link>
                <div className="post-date">{ post.postDate }</div>
            </div>
            <div className="post-middle">
                <div className="post-message" style={{ fontSize:"20px" }}>
                    { post.message } <br/> <br/>
                    { post.hasImage ? media.map(image => <img src={ image.mediaRoute } className="post-image" alt="" />) : ""}
                    { post.hasVideo ? media.map(video => <video width="400px" controls className="post-video" ><source src={ video.mediaRoute } /></video>) : ""}
                </div>
            </div><br/><br/>
            <div className="post-bottom">
                <div className="adom-count"><i className="fa fa-heart" /> { post.adomCount }</div>
                <div className="comment-count"><i className='fa fa-comment' /> { post.commentCount }</div>
                <div className="share-count"><i className="fa">&#xf1e0;</i> { post.shareCount }</div> 
            </div>      
        </div>
    )
}

export default Post;