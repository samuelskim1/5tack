import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { fetchUser } from "../../store/users";
import Summary from "./Summary";


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
      <div>
        hi
      </div>
  } else {
    moodyButton =
      <div>
        bye
      </div>
  }

  return (
    <>
      {(!isEditing && !isReviewing) && (
        <Summary moodyButton={moodyButton} />
      )}
    </>
  )
};

export default UserCard;