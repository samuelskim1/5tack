import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { receiveCurrentUser } from "../../store/session";
import UserInfo from "../UserInfo/UserInfo";
import './Profile.scss';

const Profile = () => {
    // const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user);
    const [tab, setTab] = useState('reviews');

    // useEffect(() => {
    //     dispatch( receiveCurrentUser());
    // }, [])

    if (!currentUser) return null;

    return (
        <div id="profile-container">
            <UserInfo currentUser={currentUser} />

            <div id="review-post-tabs-container">
                <div>

                    <div 
                        id="profile-tab"
                        onClick={() => setTab('reviews')}
                        className={tab === 'reviews' ? 'selected' : ''}
                    >
                        Reviews
                    </div>
                    <div 
                        id="profile-tab"
                        onClick={() => setTab('posts')}
                        className={tab === 'posts' ? 'selected' : ''}
                    >
                        Posts
                    </div>

                </div>
            </div>

            {tab === 'reviews' && (
                <div id="reviews-index-container">
                    this is where people call me toxic
                </div>
            )}

            {tab === 'posts' && (
                <div id="posts-index-container">
                    this is where i call on toxic people
                </div>
            )}
        </div>
    )
}

export default Profile;