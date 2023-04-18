import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { receiveCurrentUser } from "../../store/session";
import UserInfo from "../UserInfo/UserInfo";

const Profile = () => {
    // const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user);

    // useEffect(() => {
    //     dispatch( receiveCurrentUser());
    // }, [])

    if (!currentUser) return null;
    return (
        <div>
            <h1>please forgive the styling idk what it should look like</h1>
            <UserInfo currentUser={currentUser} />
        </div>
    )
}

export default Profile;