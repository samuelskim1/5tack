import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { receiveCurrentUser } from "../../store/session";
import UserInfo from "../UserInfo/UserInfo";
import './Profile.scss';

const Profile = () => {
    // const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user);

    // useEffect(() => {
    //     dispatch( receiveCurrentUser());
    // }, [])

    if (!currentUser) return null;

    return (
        <div id="profile-container">
            <UserInfo currentUser={currentUser} />

            <div id="reviews-index-container">
                reviews placeholder
            </div>

            <div id="posts-index-container">
                posts placeholder
            </div>
        </div>
    )
}

export default Profile;