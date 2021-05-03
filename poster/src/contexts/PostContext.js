import { createContext, useState } from "react";

export const PostContext = createContext();

const PostContextProvider = (props) => {
    const [posts, setPosts] = useState([
        { 
            id: 1,
            personId: 1,
            message: 'I got a new job!!!',
            hasImage: false, 
            hasVideo: false, 
            postDate: "2021.05.03.", 
            adomCount: 2, 
            commentCount: 1, 
            shareCount: 0, 
            imageCount: 0 
        },
        { 
            id: 2, 
            personId: 1, 
            message: 'I am going to tarvel to Madrid :D', 
            hasImage: true, 
            hasVideo: false, 
            postDate: "2021.03.01.", 
            adomCount: 5, 
            commentCount: 2, 
            shareCount: 0, 
            imageCount: 0
        },
    ]);

    const addPost = (post) => { setPosts([...posts, post]); }

    return (
        <PostContext.Provider value={{ posts, addPost }}>
            { props.children }
        </PostContext.Provider>
    )
}

export default PostContextProvider;