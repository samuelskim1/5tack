import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { updateUser } from "../../store/session";
import { fetchUser, receiveUser } from "../../store/users";
import './EditProfile.scss';

// THINGS TO RECONSIDER:
// handleSubmit "curr" variables and if/else statement at the end

const gamesList = [
  "Apex Legends",
  "CS:GO",
  "DOTA 2",
  "FIFA",
  "Fortnite",
  "Grand Theft Auto V",
  "League of Legends",
  "Lost Ark",
  "Maple Story",
  "Minecraft",
  "NBA 2K23",
  "Overwatch",
  "Rocket League",
  "Starcraft II",
  "Stardew Valley",
  "Super Smash Bros Ultimate",
  "Terraria",
  "Valorant"
]

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
  const [maxGames, setMaxGames] = useState(favorites.length >= 5);
  const hiddenUpload = useRef();
  const circle1 = useRef();
  const circle2 = useRef();
  const circle3 = useRef();


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
        dispatch(fetchUser(username));
      }
    });
  };


  const removeFave = (fave) => {
    const idx = favorites?.indexOf(fave);
    const dummyFaves = favorites;
    if (idx > -1) dummyFaves.splice(idx, 1);
    setFavorites(dummyFaves);
    const favesHTML = document.getElementsByClassName('fave');
    for (let i = 0; i < favesHTML.length; i++) {
      if (favesHTML[i].innerText.includes(fave)) favesHTML[i].style.display = "none";
    }
    setCanSubmit(true);
    setMaxGames(favorites.length >= 5);
  }

  const togglePlayStyle = (circle, style) => {
    const classList = circle.current.classList;
    if (classList[1] === 'selected-circle') {
      classList.remove('selected-circle');
      setPlayStyle(prev => {
        let next = [];
        prev.forEach(styleEle => {
          if (styleEle !== style) next.push(styleEle);
        })
        return next;
      });
    } else {
      classList.add('selected-circle');
      setPlayStyle(prev => {
        const next = [];
        prev.forEach(styleEle => {
          if (styleEle) {
            next.push(styleEle);
          }
        })
        if (!next.includes(style)) {
          next.push(style);
        }
        return next;
      });
    }
    setCanSubmit(true);
  }


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
          setCanSubmit(false);
          setErrors({ ...errors, "username": "Username cannot be longer than 20 characters!"});
        } else if (currUsername.length < 3) {
          setCanSubmit(false);
          setErrors({ ...errors, "username": "Username cannot be less than 3 characters!"})
        } else {
          setErrors({ ...errors, "username": '' });
          setCanSubmit(true);
        }
        break;
      case 'email':
        currEmail = e.target.value;
        setEmail(currEmail);
        if (!currEmail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
          setErrors({ ...errors, "email": "Email is invalid" })
          setCanSubmit(false);
        } else {
          setErrors({ ...errors, "email": '' })
          setCanSubmit(true);
        }
        break;
      case 'description':
        currDescription = e.target.value;
        setDescription(currDescription);
        if (currDescription.length > 200) {
          setErrors({ ...errors, "description": "Description cannot be longer than 200 characters" })
          setCanSubmit(false);
        } else {
          setErrors({ ...errors, "description": '' })
          setCanSubmit(true);
        }
        break;
      case 'favorites':
        if (!currFavorites.includes(e.target.value)) {
          currFavorites.push(e.target.value);
          setFavorites(currFavorites);
        }
        setFavorites(prev => {
          const next = [];
          prev.forEach(fave => {
            if (fave) next.push(fave);
          })
          return next;
        })
        if (favorites.length > 5) {
          setErrors({ ...errors, "favorites": `Woah there gamer, that's ${currFavorites.length - 5} too many games!`});
          setCanSubmit(false);
        } else {
          setErrors({ ...errors, "favorites": '' });
          setCanSubmit(true);
        }
        setMaxGames(favorites.length >= 5);
        break;
      case 'playstyle':
        currPlayStyle = e.target.value;
        setPlayStyle(currPlayStyle);
        break;
      default:
        hasPhoto = field;
        break;
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
      alt="This is what you uploaded!"
      onClick={() => hiddenUpload.current.click()}
      />
  }

  useEffect(() => {
    if (currentUser) {
      setPlayStyle(currentUser.playStyle);
    }
  }, [])




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
            <i className="fa-solid fa-image" /> Upload
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

      <div className="errors">{errors?.username}</div>
      
      <div className="user-info-divider" />

      <div className="edit-profile-section" id="edit-about">
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

      <div className="errors">{errors?.description}</div>

      <div className="user-info-divider" />


      <div className="edit-profile-section">
        <div className="edit-profile-label">
          Favorites: 
        </div>

        <div className="edit-profile-field">
          <div className="display-faves-container">
            {favorites?.map((fave, idx) => (
              fave && <p className="user-info-tag fave" key={fave + idx} onClick={() => removeFave(fave)}>
                #{fave} <i className="fa-solid fa-xmark" />
              </p>
            ))}
          </div>

          {maxGames ? (
            <select
              name="favorites"
              defaultValue='none'
              disabled
              >
              <option value="none" disabled>Add up to 5 games you usually play</option>
              {gamesList.map(game => (
                <option value={game} key={game} onClick={(e) => handleChange(e, 'favorites')}>
                  {game}
                </option>
              ))}
            </select>
          ) : (
            <select
              onChange={(e) => handleChange(e, 'favorites')}
              defaultValue='none'
              name="favorites"
              >
              <option value="none" disabled>Add up to 5 games you usually play</option>
              {gamesList.map(game => (
                <option value={game} key={game} onClick={(e) => handleChange(e, 'favorites')}>
                  {game}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      <div className="errors">{errors?.favorites}</div>

      <div className="user-info-divider" />

      <div className="edit-profile-section">
        <div className="edit-profile-label">
          Play Style:
        </div>

        <div className="edit-profile-field" id="play-style">
          <p className="user-info-tag" onClick={() => togglePlayStyle(circle1, 'competitive')} >
            <span
              className={playStyle?.includes('competitive') ? "select-play-style-circle selected-circle" : "select-play-style-circle" }
              ref={circle1}
              /> 
            #competitive
          </p>
          <p className="user-info-tag" onClick={() => togglePlayStyle(circle2, 'casual')} >
            <span
              className={playStyle?.includes('casual') ? "select-play-style-circle selected-circle" : "select-play-style-circle" }
              ref={circle2}
              /> 
            #casual
          </p>
          <p className="user-info-tag" onClick={() => togglePlayStyle(circle3, 'troll')} >
            <span
              className={playStyle?.includes('troll') ? "select-play-style-circle selected-circle" : "select-play-style-circle" }
              ref={circle3}
              /> 
            #troll
          </p>
        </div>
      </div>

      <div id="edit-profile-bottom">
        {canSubmit ? 
          <div className="save-btn" onClick={handleSubmit}>
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