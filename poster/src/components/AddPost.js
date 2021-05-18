import { useState, useContext } from "react";
import { PostContext } from "../contexts/PostContext";
import { PersonContext } from "../contexts/PersonContext";
import { MediaContext } from "../contexts/MediaContext";
import axios from "axios";

const AddPost = () => {
  const { people } = useContext(PersonContext);

  const currentProfle = people[0];

  const [message, setMessage] = useState("");
  const [media, setMedia] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const post = {
      person: {
        id: "1",
      },
      message,
    };

    axios.post("/posts/add", post);

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
          onChange={(e) => setMedia([...media, e.target.value])}
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
