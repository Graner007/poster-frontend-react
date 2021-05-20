import Post from "./Post";
 
const PostList = ({ posts }) => {
    return (
        <div className="feed">
            { posts.map(post => (
                <Post post={ post } />
            )) }
        </div>
    )
}

export default PostList;