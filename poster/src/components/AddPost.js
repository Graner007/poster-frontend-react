import { useState, useContext } from "react";
import { PostContext } from "../contexts/PostContext";
import { PersonContext } from "../contexts/PersonContext";
import { MediaContext } from "../contexts/MediaContext";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const AddPost = () => {
  const { people } = useContext(PersonContext);

  const currentProfle = people[0];

  const [message, setMessage] = useState("");
  const [media, setMedia] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message.length > 250) {
      return;
    }

    const formData = new FormData();

    for (let medium of media) {
      formData.append("files", medium);
    }
    formData.append("message", message);
    formData.append("person_id", "1");

    axios.post("/posts/add", formData);

    setMessage("");
    setMedia([]);
  };

  return (
    <form
      className="add-post"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <div className="add-post-header">
        <div className="add-post-profile-picture">
          <img src={currentProfle.profileImageRoute} alt="" />
        </div>
        <textarea
          cols="55"
          rows="4"
          type="text"
          className="add-post-message"
          value={message}
          maxLength="250"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What's happening?"
          required
        ></textarea>
      </div>
      <div className="add-post-media">
        <label htmlFor="add-post-media">
          <i className="fa fa-file-photo-o" style={{ fontSize: "30px" }} />
        </label>
        <input
          style={{ display: "none" }}
          type="file"
          multiple
          className="add-post-media"
          id="add-post-media"
          accept="image/gif, image/jpeg, image/png, image/jpg video/mp4"
          onChange={(e) => setMedia([...media, e.target.files[0]])}
        />
        <div className="add-post-emoji" style={{ fontSize: "40px" }}>
          &#9786;
        </div>
        <input type="submit" className="button add-post-submit" value="Post" />
      </div>
    </form>
  );
};

export default AddPost;
