import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from "axios";

const EditProfile = () => {
    const [person, setPerson] = useState({});
    const [view, setView] = useState("block");
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [newProfileImageRoute, setNewProfileImageRoute] = useState();
    const [newProfileBackgroundImageRoute, setNewProfileBackgroundImageRoute] = useState();
    const [newUsername, setNewUsername] = useState("");
    const [newBio, setNewBio] = useState();

    const closeEditProfileDialog = () => {
        setView("none");
        setRedirect(true);
    }

    useEffect(() => {
        axios.get("/settings/profile")
        .then(res => {
            setPerson(res.data);
            setNewProfileImageRoute(res.data.profileImageRoute);
            setNewProfileBackgroundImageRoute(res.data.profileBackgroundImageRoute);
            setNewUsername(res.data.username);
            setNewBio(res.data.description);
        })
        .catch(err => console.log(err));
    }, []);

    const sendEdit = () => {
        const newPerson = new FormData();

        newPerson.append("id", person.id);

        if (newProfileImageRoute !== person.profileImageRoute)
            newPerson.append("profileImageRoute", newProfileImageRoute);
        
        if (newProfileBackgroundImageRoute !== person.profileBackgroundImageRoute)
            newPerson.append("profileBackgroundImageRoute", newProfileBackgroundImageRoute);

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
                <div className="edit-profile-field">
                    <div className="edit-profile-modal-header">
                        <span className="close" onClick={ closeEditProfileDialog }>&times;</span>
                        <h2 className="edit-profile-title">Edit Profile</h2>
                        <button className="button" onClick={ sendEdit }>Save</button>
                    </div>
                    <div className="edit-profile-inputs">
                        <label htmlFor="edit-profile-background-image">
                            <img src={ person.profileBackgroundImageId ? person.profileBackgroundImageId : "/media/default-image" } alt="" className="profile-background-image" />
                        </label>
                        <input style={{ display: "none" }} value={person.profileImageRoute} type="file" className="edit-profile-background-image" id="edit-profile-background-image" accept="image/jpeg, image/png, image/jpg" onChange={(e) => setNewProfileBackgroundImageRoute(e.target.value)} />
                        <label htmlFor="edit-profile-image">
                            <img src={ person.profileImageId ? person.profileImageId : "/media/default-image" } alt="" className="edit-profile-image" />
                        </label>
                        <input style={{ display: "none" }}  type="file" className="edit-profile-image" id="edit-profile-image" accept="image/jpeg, image/png, image/jpg" onChange={(e) => setNewProfileImageRoute(e.target.value)} />
                        <input type="text" style={{ marginTop: "75px" }} className="input" value={ newUsername } name="new-username" id="new-username" required onChange={(e) => setNewUsername(e.target.value)} /><br />
                        <textarea className="input" value={ newBio } name="new-bio" id="new-bio" cols="20" rows="auto" onChange={(e) => setNewBio(e.target.value)}></textarea><br />
                    </div>
                    { error && <div style={{ color: 'red', padding: '10px' }}>{ errorMessage }</div> }
                    { redirect && <Redirect to={ '/profile/' + person.id } /> }
                </div>
            </div>
        </div>
    )
}

export default EditProfile;