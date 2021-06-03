import Post from "./Post";

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
