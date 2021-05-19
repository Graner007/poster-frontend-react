import { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { PersonContext } from '../contexts/PersonContext';
import axios from "axios";

const EditProfile = () => {
    const { currentPerson } = useContext(PersonContext);
    const url = window.location.pathname;

    const [view, setView] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setMessage] = useState("");
    const [newProfileImageRoute, setNewProfileImageRoute] = useState(currentPerson.profileImageRoute);
    const [newProfileBackgroundImageRoute, setNewProfileBackgroundImageRoute] = useState(currentPerson.profileBackgroundImageRoute);
    const [newUsername, setNewUsername] = useState(currentPerson.username);
    const [newBio, setNewBio] = useState(currentPerson.description);


    const closeEditProfileDialog = () => {
        setView("none");
        setRedirect(true);
    }

    useEffect(() => {
        console.log(url);
        switch (url) {
            case "/settings/profile":
                setView("block");
                break;
            default:
                setView("none");    
        }
    }, [url]);

    const sendEdit = (e) => {
        e.preventDefault();

        const newPerson = {
            profileBackgroundImageRoute: newProfileBackgroundImageRoute,
            profileImageRoute: newProfileImageRoute,
            username: newUsername,
            description: newBio
        }

        axios.post("/settings/profile", newPerson)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <div className="modal" style={{ display: view }}>
            <div className="modal-content">
                <form className="edit-profile-field" onSubmit={ sendEdit }>
                    <div className="edit-profile-modal-header">
                        <span className="close" onClick={ closeEditProfileDialog }>&times;</span>
                        <h2 className="edit-profile-title">Edit Profile</h2>
                        <input type="submit" className="button" value="Save" />
                    </div>
                    <div className="edit-profile-inputs">
                        <label htmlFor="edit-profile-background-image">
                            <img src={ newProfileBackgroundImageRoute } alt="" className="profile-background-image" />
                        </label>
                        <input style={{ display: "none" }} type="file" className="edit-profile-background-image" id="edit-profile-background-image" accept="image/jpeg, image/png, image/jpg" onChange={(e) => setNewProfileBackgroundImageRoute(e.target.value)} />
                        <label htmlFor="edit-profile-image">
                            <img src={ newProfileImageRoute } alt="" className="profile-image" />
                        </label>
                        <input style={{ display: "none" }} type="file" className="edit-profile-image" id="edit-profile-image" accept="image/jpeg, image/png, image/jpg" onChange={(e) => setNewProfileImageRoute(e.target.value)} />
                        <input type="text" className="input" value={ newUsername } placeholder="Username" name="new-username" id="new-username" required onChange={(e) => setNewUsername(e.target.value)} /><br />
                        <textarea value={ newBio } name="new-bio" id="new-bio" cols="30" rows="10" onChange={(e) => setNewBio(e.target.value)}></textarea><br />
                    </div>
                    { error && <div style={{ color: 'red' }}>{ errorMessage }</div> }
                    { redirect && <Redirect to={ '/profile/' + currentPerson.id } /> }
                </form>
            </div>
        </div>
    )
}

export default EditProfile;