import AddPost from "./AddPost";
import PostList from "./PostList";
import SpaceAfterAddPost from "./SpaceAfterAddPost";
import { useEffect, useState } from "react";
import axios from "axios";

const Feed = () => {
  const [feedPosts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const init = async () => {
    await axios.get("/posts").then((res) => {
      setPosts(res.data.posts);
    });
  };

  useEffect(() => {
    init();
    setLoading(false);
  }, []);

  return (
    <div className="feed">
      <AddPost />
      <SpaceAfterAddPost />
      {!loading && <PostList posts={feedPosts} />}
    </div>
  );
};

export default Feed;
