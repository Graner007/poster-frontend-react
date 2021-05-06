import AddPost from "./AddPost"
import PostList from "./PostList"
import SpaceAfterAddPost from "./SpaceAfterAddPost"


const Feed = () => {
    return (
        <div className="feed">
            <AddPost />
            <SpaceAfterAddPost />
            <PostList />
        </div>
    )
}

export default Feed;