import { createContext, useState } from "react";

export const MediaContext = createContext();

const MediaContextProvider = (props) => {
    const [medias, setMedias] = useState([
        { 
            id: 1,
            postId: 2,
            mediaRoute: "kiscica.png",
            mediaType: 'png' 
        },
        { 
            id: 2,
            postId: 2,
            mediaRoute: "kutya.jpg",
            mediaType: 'jpg' 
        },
        { 
            id: 3,
            postId: 3,
            mediaRoute: "torta.mp4",
            mediaType: 'mp4' 
        }
    ]);

    const addMedia = (media) => { setMedias([...medias, media]); }

    return (
        <MediaContext.Provider value={{ medias, addMedia }}>
            { props.children }
        </MediaContext.Provider>
    )
}

export default MediaContextProvider;