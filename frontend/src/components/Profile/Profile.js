import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserInfo from "../UserInfo/UserInfo";
import { useParams } from "react-router-dom";
import './Profile.scss';
import PostIndex from "../PostIndex/PostIndex";
import ReviewIndex from "../ReviewIndex/ReviewIndex";
import { fetchUserPosts } from "../../store/posts";
import { fetchUserReviews } from "../../store/reviews";
import { fetchUser } from "../../store/users";

const Profile = () => {
    const dispatch = useDispatch();
    const { username } = useParams();
    const user = useSelector(state => state?.users[username]);
    const posts = useSelector(state => typeof(state?.posts) === 'object' ? Object.values(state?.posts) : state?.posts);
    //  const posts = useSelector(state => Object.values(state?.posts));
    const reviews = useSelector(state => typeof (state?.reviews) === 'object' ? Object.values(state?.reviews) : state?.reviews)
    const [tab, setTab] = useState('reviews');
    // debugger;

    useEffect(() => {
        dispatch(fetchUser(username));
        dispatch(fetchUserPosts(username));
        dispatch(fetchUserReviews(username));
    }, [dispatch, username]);


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
                <ReviewIndex reviews={reviews}/>
            )}

            {tab === 'posts' && (
                <PostIndex posts={posts} />
            )}
        </div>
    )
}

export default Profile;