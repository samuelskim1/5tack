import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { updateUser } from "../../store/session";
import { receiveUser } from "../../store/users";
import './EditProfile.scss';

// THINGS TO RECONSIDER:
// handleSubmit "curr" variables and if/else statement at the end

const EditProfile = ({ setIsEditing }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector(state => state?.session?.user);
  const [errors, setErrors] = useState({username: '', email: '', description: ''});
  const [username, setUsername] = useState(currentUser?.username);
  const [email, setEmail] = useState(currentUser?.email);
  const [description, setDescription] = useState(currentUser?.description || '');
  const [favorites, setFavorites] = useState(currentUser?.favorites || []);
  const [playStyle, setPlayStyle] = useState(currentUser?.playstyle || []);
  const [photo, setPhoto] = useState();
  const [profileImageUrl, setProfileImageUrl] = useState(currentUser?.profileImageUrl);
  const [canSubmit, setCanSubmit] = useState(false);
  const hiddenUpload = useRef();


  const handleSubmit = () => {
    const user = {
      ...currentUser,
      username,
      email,
      description,
      favorites,
      playStyle,
      photo,
      profileImageUrl
    };

    dispatch(updateUser(user)).then(res => {
      if (res.ok) {
        setIsEditing(false);
        history.push(`/${username}`);
      }
    });

    dispatch(receiveUser(user));
  };


  const handleChange = (e, field) => {
    let currUsername = username;
    let currEmail = email;
    let currDescription = description;
    let currFavorites = favorites;
    let currPlayStyle = playStyle;
    let hasPhoto;

    switch (field) {
      case 'username':
        currUsername = e.target.value;
        setUsername(currUsername);
        if (currUsername.length > 20) {
          setErrors({ ...errors, ["username"]: "Username cannot be longer than 20 characters!"});
        } else {
          setErrors({ ...errors, ["username"]: '' });
        }
        break;
      case 'email':
        currEmail = e.target.value;
        setEmail(currEmail);
        if (!currEmail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
          setErrors({ ...errors, ["email"]: "Email is invalid" })
        } else {
          setErrors({ ...errors, ["email"]: '' })
        }
        break;
      case 'description':
        currDescription = e.target.value;
        setDescription(currDescription);
        if (currDescription.length > 400) {
          setErrors({ ...errors, ["description"]: "Description cannot be longer than 400 characters" })
        } else {
          setErrors({ ...errors, ["description"]: '' })
        }
        break;
      case 'favorites':
        currFavorites = e.target.value;
        setFavorites(currFavorites);
        if (currFavorites.length > 5) {
          setErrors({ ...errors, ["favorites"]: `Woah there gamer, that's ${currFavorites.length - 5} too many games!`});
        } else {
          setErrors({ ...errors, ["favorites"]: '' });
        }
        break;
      case 'playstyle':
        currPlayStyle = e.target.value;
        setPlayStyle(currPlayStyle);
        break;
      default:
        hasPhoto = field;
        break;
    }
    
    if (currUsername.length >= 3 && currUsername.length <= 30 && currEmail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && currEmail.length > 0) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }

  const handlePhoto = async ({ currentTarget }) => {
    if (currentTarget.files[0]) {
      setPhoto(currentTarget.files[0]);
      const fileReader = new FileReader();
      fileReader.readAsDataURL(currentTarget.files[0]);
      fileReader.onload = () => setProfileImageUrl(fileReader.result);
    }
  }

  let preview = null;
  if (profileImageUrl) {
    preview = 
    <img
      src={profileImageUrl}
      alt="This is your selected profile picture"
      onClick={() => hiddenUpload.current.click()}
      />
  }


  return (
    <div id="edit-profile-container">
      <h2>Edit Your Profile</h2>


      <div className="edit-profile-row" id="edit-pfp">
        <div className="edit-profile-label" id="edit-pfp">
          {!preview && (
            <img 
              src={currentUser?.profileImageUrl} 
              alt={currentUser?.username} 
              onClick={() => hiddenUpload.current.click()}
              />
            )}
          {preview && preview}

          <div 
            id="change-pfp-btn-container" 
            onClick={() => hiddenUpload.current.click()}
            >
            <i className="fa-solid fa-image" /> Change Picture
          </div>

          <input
            ref={hiddenUpload}
            type="file"
            accept="image/*"
            onChange={(e) => {handlePhoto(e); handleChange(e, e.target)}}
            style={{display: 'none'}}
            />
        </div>

        <div className="edit-profile-field" id="edit-username">
          <div className="edit-profile-label">
            Username: 
          </div>

          <input
            type="text"
            value={username}
            onChange={(e) => handleChange(e, 'username')}
            placeholder="How should we call you?"
            />
        </div>
      </div>

      <div className="user-info-divider" />

      <div className="edit-profile-row">
        <div className="edit-profile-label">
          About: 
        </div>

        <div className="edit-profile-field">
          <textarea
            value={description}
            onChange={(e) => handleChange(e, 'description')}
            placeholder="Tell us about yourself!"
            />
        </div>
      </div>

      <div className="user-info-divider" />


      <div className="edit-profile-row">
        <div className="edit-profile-label">
          Favorites: 
        </div>

        <div className="edit-profile-field">

        </div>
      </div>

      <div className="user-info-divider" />

      <div className="edit-profile-row">
        <div className="edit-profile-label">
          Play Style:
        </div>

        <div className="edit-profile-field">
          
        </div>
      </div>

      <div id="edit-profile-bottom">
        {canSubmit ? 
          <div className="save-btn">
            Save
          </div>
          :
          <div className="save-btn cant-save">
            Save
          </div>
        }

        <div className="cancel-btn" onClick={() => setIsEditing(false)}>
          Cancel
        </div>
      </div>
    </div>
  )
};

export default EditProfile;