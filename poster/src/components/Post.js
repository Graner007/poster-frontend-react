import { Link } from "react-router-dom";
import ImageContainer from "./ImageContainer";
import { ReactComponent as DefaultProfile } from "../icons/profileicon.svg";

const Post = ({ post, media }) => {
  const person = post.person;

  return (
    <div className="post" key={post.id}>
      <div className="post-header">
        <Link to={"/profile/" + person.id} className="profile-link">
          <div className="profile-picture">
            {person.profileImageId !== 0 && (
              <img src={person.profileImageId} alt="" />
            )}
            {person.profileImageId === 0 && <DefaultProfile />}
          </div>
          <div className="profile-name">{person.username}</div>
        </Link>
        <div className="post-date">{post.postDate}</div>
      </div>
      <div className="post-middle">
        <div className="post-message" style={{ fontSize: "20px" }}>
          {post.message} <br /> <br />
        </div>
        {post.hasImage && <ImageContainer images={media} />}
      </div>
      <br />
      <br />
      <div className="post-bottom">
        <div className="adom-count">
          <i className="fa fa-heart" /> {post.adomCount}
        </div>
        <div className="comment-count">
          <i className="fa fa-comment" /> {post.commentCount}
        </div>
        <div className="share-count">
          <i className="fa">&#xf1e0;</i> {post.shareCount}
        </div>
      </div>
    </div>
  );
};

export default Post;
