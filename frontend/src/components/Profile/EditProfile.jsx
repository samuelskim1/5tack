import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { updateUser } from "../../store/session";
import { receiveUser } from "../../store/users";



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
          setErrors({ ...errors, ["username"]: '' })
        }
    }
  }


  return (
    <>

    </>
  )
};

export default EditProfile;