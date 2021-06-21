import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from "axios";

const EditProfile = () => {
    const [person, setPerson] = useState({});
    const [view, setView] = useState("block");
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [newProfileImageId, setNewProfileImageId] = useState();
    const [newProfileBackgroundImageId, setNewProfileBackgroundImageId] = useState();
    const [newUsername, setNewUsername] = useState("");
    const [newBio, setNewBio] = useState();
    const url = "http://localhost:8080/media/";

    const closeEditProfileDialog = () => {
        setView("none");
        setRedirect(true);
    }

    useEffect(() => {
        axios.get("/settings/profile")
        .then(res => {
            setPerson(res.data);
            setNewProfileImageId(res.data.profileImageId);
            setNewProfileBackgroundImageId(res.data.profileBackgroundImageId);
            setNewUsername(res.data.username);
            setNewBio(res.data.description);
        })
        .catch(err => console.error(err));
    }, []);

    const sendEdit = (e) => {
        e.preventDefault();

        const newPerson = new FormData();

        newPerson.append("id", person.id);

        if (newProfileImageId !== person.profileImageId)
            newPerson.append("profileImageId", newProfileImageId);
        
        if (newProfileBackgroundImageId !== person.profileBackgroundImageRoute)
            newPerson.append("profileBackgroundImageId", newProfileBackgroundImageId);

        if (newUsername !== person.username)
            newPerson.append("username", newUsername);

        if (newBio !== person.description)
            newPerson.append("description", newBio);

        axios.put("/settings/profile", newPerson)
            .then(res => {
                if (res.status === 200) {
                    setError(false);
                    setErrorMessage("");
                    setRedirect(true);
                }
            })
            .catch(error => {
                if (error.response) {
                setErrorMessage(error.response.data);
                setError(true);
                }
        });
    }

    return (
        <div className="modal" style={{ display: view }}>
            <div className="modal-content">
                <form className="edit-profile-field" encType="multipart/form-data" onSubmit={sendEdit}>
                    <div className="edit-profile-modal-header">
                        <span className="close" onClick={ closeEditProfileDialog }>&times;</span>
                        <h2 className="edit-profile-title">Edit Profile</h2>
                        <button className="button" type="submit">Save</button>
                    </div>
                    <div className="edit-profile-inputs">
                        <label htmlFor="edit-profile-background-image">
                            <img src={ person.profileBackgroundImageId > 0 ? url + person.profileBackgroundImageId : url + "default-image" } alt="" className="profile-background-image" />
                        </label>
                        <input style={{ display: "none" }} value={person.profileImageRoute} type="file" accept="image/gif, image/jpeg, image/png, image/jpg" className="edit-profile-background-image" id="edit-profile-background-image" onChange={(e) => setNewProfileBackgroundImageId(e.target.files[0])} />
                        <label htmlFor="edit-profile-image">
                            <img src={ person.profileImageId > 0 ? url + person.profileImageId : url + "default-image" } accept="image/gif, image/jpeg, image/png, image/jpg" alt="" className="edit-profile-image" />
                        </label>
                        <input style={{ display: "none" }}  type="file" className="edit-profile-image" id="edit-profile-image" accept="image/jpeg, image/png, image/jpg" onChange={(e) => setNewProfileImageId(e.target.files[0])} />
                        <input type="text" style={{ marginTop: "75px" }} className="input" value={ newUsername } name="new-username" id="new-username" required onChange={(e) => setNewUsername(e.target.value)} /><br />
                        <textarea className="input" value={ newBio } name="new-bio" id="new-bio" cols="20" rows="auto" onChange={(e) => setNewBio(e.target.value)}></textarea><br />
                    </div>
                    { error && <div style={{ color: 'red', padding: '10px' }}>{ errorMessage }</div> }
                    { redirect && <Redirect to={ '/profile/' + person.id } /> }
                </form>
            </div>
        </div>
    )
}

export default EditProfile;