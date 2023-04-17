import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { receiveCurrentUser } from "../../store/session";

const Profile = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch( receiveCurrentUser());
    }, [])

    if (!currentUser) return null;
    return (
        <div>{currentUser.username}</div>
    )
}

export default Profile;