import Post from "./Post";

const PostList = ({ posts }) => {
  return (
    <div className="feed">
      {posts.map((post) => (
        <Post post={post.post} media={post.media} key={ post.id } />
      ))}
    </div>
  );
};

export default PostList;
