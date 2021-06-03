import { Link } from "react-router-dom";
import ImageContainer from "./ImageContainer";
import { ReactComponent as DefaultProfile } from "../icons/profileicon.svg";
import moment from "moment";
import { useState } from "react";
import axios from "axios";

const Post = ({ post, media }) => {
  const [isLiked, setLiked] = useState(post.liked);
  const [isShared, setShared] = useState(post.shared);

  const person = post.person;

  const date = moment(person.postDate).fromNow();

  const likeEvent = (e) => {
    e.preventDefault();
    if (isLiked) {
      axios.delete("/like/" + post.id);
    } else {
      axios.post("/like/" + post.id);
    }
    setLiked(!isLiked);
  };

  const shareEvent = (e) => {
    e.preventDefault();
    if (isShared) {
      axios.delete("/share/" + post.id);
    } else {
      axios.post("/share/" + post.id);
    }
    setShared(!isShared);
  };

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
        <div className="post-date">{date}</div>
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
        <div
          className={isLiked === true ? "adom-count liked" : "adom-count"}
          onClick={likeEvent}
        >
          <i className="fa fa-heart" /> {post.adomCount}
        </div>
        <div className="comment-count">
          <i className="fa fa-comment" /> {post.commentCount}
        </div>
        <div
          className={isShared === true ? "share-count shared" : "share-count"}
          onClick={shareEvent}
        >
          <i className="fa">&#xf1e0;</i> {post.shareCount}
        </div>
      </div>
    </div>
  );
};

export default Post;
