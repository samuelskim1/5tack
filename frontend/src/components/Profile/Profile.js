import { useState } from "react";
import { useSelector } from "react-redux";
import UserInfo from "../UserInfo/UserInfo";
import { useParams } from "react-router-dom";
import './Profile.scss';
import PostIndex from "../PostIndex/PostIndex";

const Profile = () => {
    const { username } = useParams();
    const user = useSelector(state => state?.users[username]);
    const [tab, setTab] = useState('reviews');


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
                    
                </div>
            )}

            {tab === 'posts' && (
                <PostIndex />
            )}
        </div>
    )
}

export default Profile;