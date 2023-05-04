import { useEffect, useReducer, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { clearSessionErrors, getCurrentUser, updateUser } from "../../store/session";
import { useHistory, useParams } from "react-router-dom";
import '../SessionForms/SessionForm.scss';
import { receiveUser } from "../../store/users";

const EditUserInfoForm = ({ setEdit }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector(state => state.session?.user);
    const { username } = useParams();

    const errors = useSelector(state => state.errors?.session);
    // const showUser = useSelector(state => state?.users[username]);
    const showUser = useSelector(state => state?.session.user);
    const [showUsername, setShowUsername] = useState(currentUser?.username);
    const [email, setEmail] = useState(currentUser?.email);
    const [description, setDescription] = useState(currentUser?.description || '');
    const [canSubmit, setCanSubmit] = useState(false);

    const [photo, setPhoto] = useState();
    const [profileImageUrl, setProfileImageUrl] = useState();
    const uploadBtn = useRef();

    // useEffect(() => {
    //     dispatch(getCurrentUser(currentUser));
    //     // why is this session errors?
    //     // return () => dispatch(clearSessionErrors());
    // }, [currentUser]);

    const handleSubmit = () => {
        const user = {
            ...currentUser,
            username: showUsername,
            email,
            description,
            photo
        }
        dispatch(updateUser(user)).then(res => {
            if (res.ok) {
                setEdit(false);
                history.push(`/${showUsername}`);
            }
        });
        dispatch(receiveUser(user));
        // console.log(res);
        // if (res.ok) {
        //     setEdit(false);
        //     history.push(`/${showUsername}`);
        // };
        // .then(res => {
        //     if (res.ok) {
        //         console.log('testing if this part is being reached');
        //         history.push(`/${username}`);
        //     };
        // });
    }

    const handleChange = (e, field) => {
        let currUsername = showUsername;
        let currEmail = email;
        let currDescription = description;
        switch (field) {
            case 'username':
                currUsername = e.target.value;
                setShowUsername(currUsername);
                break;
            case 'email':
                currEmail = e.target.value;
                setEmail(currEmail);
                break;
            case 'description':
                currDescription = e.target.value;
                setDescription(currDescription);
                break;
        }
        // const regexp = ;
        if (currUsername.length >= 3 && currUsername.length <= 30 && currEmail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && currEmail.length > 0 ) {
            setCanSubmit(true);
        } else {
            setCanSubmit(false);
        }

    }

    const handlePhoto = async ({ currentTarget }) => {
        if (currentTarget.files[0]) {
            setPhoto(currentTarget.files[0]);
            const fileReader = new FileReader();
            // sets results attr to url of photo data
            fileReader.readAsDataURL(currentTarget.files[0]);
            // after file is successfully read
            fileReader.onload = () => setProfileImageUrl(fileReader.result);
        }

    }

    return (
        <div id="session-form-container">
            <form className="session-form">
                <h2>Edit your profile</h2>
                <div className="errors">{errors?.username}</div>
                <label>
                    <span>Username</span>
                    <input
                        type="text"
                        value={showUsername}
                        onChange={(e) => handleChange(e, 'username')}
                        placeholder="How should we call you?"
                    />
                </label>
                <div className="errors">{errors?.email}</div>
                <label>
                    <span>Email</span>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => handleChange(e, 'email')}
                        placeholder="Tired of spam? Enter a new email"
                    />
                </label>
                <div className="errors">{errors?.description}</div>
                <label>
                    <span>Description</span>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => handleChange(e, 'description')}
                        placeholder="Tell us about yourself!"
                    />
                </label>

                <div 
                    onClick={() => uploadBtn.current.click()}
                >
                    <input
                        ref={uploadBtn}
                        type="file"
                        onChange={handlePhoto}
                        style={{display: 'none'}}
                    />
                    <p>Add Profile Image</p>
                </div>

                {/* {<div id="submit-login-btn" onClick={handleSubmit}>Update</div>} */}
                { canSubmit ?
                    <div
                    id="submit-login-btn"
                        onClick={handleSubmit}
                    >
                        Update
                    </div>
                    :
                    <div
                        className="disabled-btn"
                    >
                        Update
                    </div>
                }
            </form>
        </div>
    )
}

export default EditUserInfoForm;