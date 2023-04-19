import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserInfo from "../UserInfo/UserInfo";
import { useParams } from "react-router-dom";
import './Profile.scss';
import PostIndex from "../PostIndex/PostIndex";
import { fetchUserPosts } from "../../store/posts";

const Profile = () => {
    const dispatch = useDispatch();
    const { username } = useParams();
    const user = useSelector(state => state?.users[username]);
    const posts = useSelector(state => typeof(state?.posts) === 'object' ? Object.values(state?.posts) : state?.posts);
    const [tab, setTab] = useState('reviews');


    useEffect(() => {
        dispatch(fetchUserPosts(username));
    }, [dispatch]);


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
                <PostIndex posts={posts} />
            )}
        </div>
    )
}

export default Profile;