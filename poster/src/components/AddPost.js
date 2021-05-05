import { useState, useContext } from 'react';
import { PostContext} from "../contexts/PostContext";
import { PersonContext } from "../contexts/PersonContext";
import { MediaContext } from "../contexts/MediaContext";

const AddPost = () => {
    const { posts, addPost } = useContext(PostContext);
    const { people } = useContext(PersonContext);
    const { medias, addMedia } = useContext(MediaContext);

    const currentProfle = people[0];

    const [message, setMessage] = useState("");
    const [media, setMedia] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const postId = posts.length + 1;
        let hasImage = false;
        let hasVideo = false;
        let imageCount = 0;

        console.log(media);

        if (media.length > 0) {
            media.map(media => media.mediaType === "mp4" ? hasVideo = true : hasImage = true);
            media.map(media => media.mediaType !== "mp4" ? imageCount++ : null);
            media.map(media => addMedia({ id: medias.length + 1, postId: postId, mediaRoute: media.split("\\")[2], mediaType: media.split(".")[media.split(".").length-1]}));
        }

        let today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        today = year + '.' + month + '.' + day;

        const newPost = {
            id: postId,
            personId: 2,
            message: message,
            hasImage: hasImage, 
            hasVideo: hasVideo, 
            postDate: today,
            adomCount: 0, 
            commentCount: 0, 
            shareCount: 0, 
            imageCount: imageCount 
        }

        addPost(newPost);

        setMessage("");
        setMedia([]);
    }

    return (
        <form className="add-post" onSubmit={ handleSubmit } encType="multipart/form-data">
            <div className="add-post-profile-picture">{ currentProfle.profilePicture }</div>
            <textarea cols="20" rows="4" type="text" className="add-post-message" value={ message } onChange={(e) => setMessage(e.target.value)} placeholder="What's happening?" required></textarea>
            <label htmlFor="add-post-media"><i className="fa fa-file-photo-o" style={{ fontSize:"30px" }} /></label><input style={{ display:"none" }} type="file" multiple className="add-post-media" id="add-post-media" accept="image/gif, image/jpeg, image/png, image/jpg video/mp4" onChange={(e) => setMedia([...media, e.target.value])} />
            <div className="add-post-emoji" style={{ fontSize:"30px" }}>&#9786;</div>
            <input type="submit" className="button add-post-button" value="Post"/>
        </form>
    )
}

export default AddPost;