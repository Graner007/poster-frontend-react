import { useContext } from "react";
import Post from "./Post";
import { PostContext} from "../contexts/PostContext";
 
const PostList = () => {
    const { posts } = useContext(PostContext);

    return (
        <div className="feed">
            { posts.map((post) => (
                <Post post={ post } />
            )) }
        </div>
    )
}

export default PostList;