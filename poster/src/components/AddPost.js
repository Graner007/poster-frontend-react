import { useState, useContext } from 'react';
import { PostContext} from "../contexts/PostContext";
import { PersonContext } from "../contexts/PersonContext";
import { MediaContext } from "../contexts/MediaContext";
import { v4 as uuidv4 } from 'uuid';

const AddPost = () => {
    const { addPost } = useContext(PostContext);
    const { people } = useContext(PersonContext);
    const { addMedia } = useContext(MediaContext);
    let postId = uuidv4();

    const currentProfle = people[0];

    const [message, setMessage] = useState("");
    const [media, setMedia] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let hasImage = false;
        let hasVideo = false;
        let imageCount = 0;

        if (media.length > 0) {
            media.map(media => media.mediaType === "mp4" ? hasVideo = true : hasImage = true);
            media.map(media => media.mediaType !== "mp4" ? imageCount++ : null);
            media.map(media => addMedia(postId, media));
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
            <div className="add-post-header">
                <div className="add-post-profile-picture"><img src={ currentProfle.profileImageRoute } alt="" /></div>
                <textarea cols="55" rows="4" type="text" className="add-post-message" value={ message } onChange={(e) => setMessage(e.target.value)} placeholder="What's happening?" required></textarea>
            </div>
            <div className="add-post-media">
                <label htmlFor="add-post-media"><i className="fa fa-file-photo-o" style={{ fontSize:"30px" }} /></label><input style={{ display:"none" }} type="file" multiple className="add-post-media" id="add-post-media" accept="image/gif, image/jpeg, image/png, image/jpg video/mp4" onChange={(e) => setMedia([...media, e.target.value])} />
                <div className="add-post-emoji" style={{ fontSize:"40px" }}>&#9786;</div>
            <div className="add-post-submit">
                <input type="submit" className="button add-post-button" value="Post"/>
            </div>
            </div>
        </form>
    )
}

export default AddPost;