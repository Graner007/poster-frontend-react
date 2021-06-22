import AddPost from "./AddPost";
import PostList from "./PostList";
import CustomPaddingDiv from "./CustomPaddingDiv";
import { useEffect, useState } from "react";
import axios from "axios";

const Feed = () => {
  const [feedPosts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const init = () => {
    return axios.get("/posts").then(res => setPosts(res.data.posts));
  };

  useEffect(() => {
    init()
      .then(res => setLoading(false));
  }, []);

  return (
    <div className="feed">
      <AddPost />
      <CustomPaddingDiv padding={ '5px' } bgColor={ '#efefef' } />
      {!loading && <PostList posts={ feedPosts } />}
    </div>
  );
};

export default Feed;
