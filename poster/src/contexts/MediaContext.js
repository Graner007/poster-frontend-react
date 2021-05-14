import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const MediaContext = createContext();

const MediaContextProvider = (props) => {
    const [medias, setMedias] = useState([
        { 
            id: 1,
            postId: 2,
            mediaRoute: "https://picsum.photos/100",
            mediaType: 'jpg' 
        },
        { 
            id: 2,
            postId: 2,
            mediaRoute: "https://picsum.photos/500",
            mediaType: 'jpg' 
        },
        { 
            id: 3,
            postId: 3,
            mediaRoute: "https://picsum.photos/600",
            mediaType: 'jpg' 
        }
    ]);

    const addMedia = (postId, mediaRoute) => { setMedias([...medias, { id: uuidv4(), postId: postId, mediaRoute: mediaRoute, mediaType: "jpg" }]); }

    return (
        <MediaContext.Provider value={{ medias, addMedia }}>
            { props.children }
        </MediaContext.Provider>
    )
}

export default MediaContextProvider;