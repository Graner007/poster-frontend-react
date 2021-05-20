import AddPost from "./AddPost";
import PostList from "./PostList";
import SpaceAfterAddPost from "./SpaceAfterAddPost";
import { useContext } from "react";
import { PostContext } from "../contexts/PostContext";


const Feed = () => {
    const { posts } = useContext(PostContext);

    return (
        <div className="feed">
            <AddPost />
            <SpaceAfterAddPost />
            <PostList posts={ posts } />
        </div>
    )
}

export default Feed;