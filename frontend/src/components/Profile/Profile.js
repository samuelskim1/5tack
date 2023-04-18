import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserInfo from "../UserInfo/UserInfo";
import { fetchUser } from "../../store/users";
import { useParams } from "react-router-dom";
import './Profile.scss';

const Profile = () => {
    const dispatch = useDispatch();
    const { username } = useParams();
    const user = useSelector(state => state?.users?.username);
    const [tab, setTab] = useState('reviews');

    useEffect(() => {
        dispatch(fetchUser(username));
    }, [dispatch, username])


    return (
        <div id="profile-container">
            <UserInfo user={user} />

            <div id="review-post-tabs-container">
                <div>

                    <div 
                        id="profile-tab"
                        onClick={() => setTab('reviews')}
                        className={tab === 'reviews' ? 'selected' : ''}
                    >
                        REVIEWS
                    </div>
                    <div 
                        id="profile-tab"
                        onClick={() => setTab('posts')}
                        className={tab === 'posts' ? 'selected' : ''}
                    >
                        POSTS
                    </div>

                </div>
            </div>

            {tab === 'reviews' && (
                <div id="reviews-index-container">
                    <div className="review-box">
                        review 1<br/>hello<br/>hello<br/>hello<br/>hello
                    </div>
                    <div className="review-box">
                        review 2<br/>hello<br/>hello<br/>hello<br/>hello
                    </div>
                    <div className="review-box">
                        review 3<br/>hello<br/>hello<br/>hello<br/>hello
                    </div>
                    <div className="review-box">
                        review 3<br/>hello<br/>hello<br/>hello<br/>hello
                    </div>
                    <div className="review-box">
                        review 3<br/>hello<br/>hello<br/>hello<br/>hello
                    </div>
                    <div className="review-box">
                        review 3<br/>hello<br/>hello<br/>hello<br/>hello
                    </div>
                    <div className="review-box">
                        review 3<br/>hello<br/>hello<br/>hello<br/>hello
                    </div>
                    <div className="review-box">
                        review 3<br/>hello<br/>hello<br/>hello<br/>hello
                    </div>
                    <div className="review-box">
                        review 3<br/>hello<br/>hello<br/>hello<br/>hello
                    </div>
                    <div className="review-box">
                        review 3<br/>hello<br/>hello<br/>hello<br/>hello
                    </div>
                    
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