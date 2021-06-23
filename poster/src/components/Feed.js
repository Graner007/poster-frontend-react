import AddPost from "./AddPost";
import PostList from "./PostList";
import CustomPaddingDiv from "./CustomPaddingDiv";
import { useEffect, useState } from "react";
import axios from "axios";

const Feed = () => {
  const [feedPosts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("/posts")
      .then(res => setPosts(res.data.posts))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="feed">
      <AddPost />
      <CustomPaddingDiv padding={ '5px' } bgColor={ '#efefef' } />
      <PostList posts={ feedPosts } />
    </div>
  );
};

export default Feed;