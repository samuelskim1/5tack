import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { fetchUser } from "../../store/users";
import Summary from "./Summary";
import EditProfile from "./EditProfile";
import ReviewUser from "./ReviewUser";


const UserCard = () => {
  const dispatch = useDispatch();
  const { username } = useParams();
  const currentUser = useSelector(state => state?.session?.user);
  const showUser = useSelector(state => state?.users[username]);

  const [isEditing, setIsEditing] = useState(false);
  const [isReviewing, setIsReviewing] = useState(false);

  let moodyButton;

  useEffect(() => {
    dispatch(fetchUser(username));
  }, [dispatch, username, showUser?.description, currentUser?.profileImageUrl]);


  if (currentUser?.username === username) {
    moodyButton =
      <div id="moody-button" onClick={() => setIsEditing(true)}>
        <i className="fa-solid fa-pen-to-square" /> Edit Profile
      </div>
  } else {
    moodyButton =
      <div id="moody-button" onClick={() => setIsReviewing(true)}>
        <i className="fa-solid fa-star" /> Write a Review
      </div>
  }

  return (
    <>
      {(!isEditing && !isReviewing) && (
        <Summary moodyButton={moodyButton} />
      )}
      {isEditing && (
        <EditProfile setIsEditing={setIsEditing} />
      )}
      {isReviewing && (
        <ReviewUser setIsReviewing={setIsReviewing} />
      )}
    </>
  )
};

export default UserCard;