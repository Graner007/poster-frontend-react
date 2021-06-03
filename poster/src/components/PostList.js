import { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";

const PostList = ({ posts }) => {
  return (
    <div className="feed">
      {posts.map((post) => (
        <Post post={post.post} media={post.media} />
      ))}
    </div>
  );
};

export default PostList;
