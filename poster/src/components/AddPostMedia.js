import { ReactComponent as DeleteIcon } from "../icons/deleteicon.svg";

const AddPostMedia = ({ medium, handleRemove }) => {
  return (
    <div className="add-post-media-elem">
      <div className="add-post-media-elem-name">{medium.name}</div>
      <div
        className="add-post-media-elem-delete"
        data-name={medium.name}
        onClick={handleRemove}
      >
        {<DeleteIcon />}
      </div>
    </div>
  );
};

export default AddPostMedia;
