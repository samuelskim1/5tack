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
import { Redirect } from "react-router-dom";
import { clearUserErrors } from "../../store/users";
import { useHistory } from "react-router-dom";


const Profile = () => {
    const dispatch = useDispatch();
    const { username } = useParams();
    const history = useHistory();
    const user = useSelector(state => state?.users[username]);
    // const userErrors = useSelector(state => state?.errors?.users)
    const posts = useSelector(state => Object.values(state?.posts));
    //  const posts = useSelector(state => Object.values(state?.posts));
    const reviews = useSelector(state => Object.values(state?.reviews))
    const [tab, setTab] = useState('reviews');
    
    //this fetches the proper user and redirects to our 404 page if that fetch request returns an error
    const grabError = async () => {
        const res = await dispatch(fetchUser(username));
        if (res.statusCode >= 400) {
            history.push('/uh-oh/404');
            dispatch(clearUserErrors());
        }
    }

    useEffect(() => {
        grabError();
        dispatch(fetchUserPosts(username));
        dispatch(fetchUserReviews(username));
    }, [dispatch, username, user?.profileImageUrl]);
    
    
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
                <>
                    <ReviewIndex reviews={reviews} user={user}/>
                </>
            )}

            {tab === 'posts' && (
                <PostIndex posts={posts} />
            )}
        </div>
    )
}

export default Profile;