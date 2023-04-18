import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../store/users";


const Avatar = ({ user }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(user?.username));
  }, [dispatch, user?.username])

  return (
    <div id="avatar-container">
      {!!user?.avatar && <img src={user?.avatar} alt={user?.username} />}
      {!user?.avatar && (
        <div>
          {user?.username?.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  );
};

export default Avatar;