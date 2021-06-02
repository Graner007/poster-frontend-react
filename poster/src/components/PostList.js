import { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    await axios
      .get("/posts")
      .then((data) => setPosts(data.data));
  };

  return (
    <div className="feed">
      {posts.map((post) => (
        <Post post={post.post} media={post.media} />
      ))}
    </div>
  );
};

export default PostList;
