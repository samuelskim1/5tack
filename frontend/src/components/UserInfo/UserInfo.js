import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUser } from '../../store/users';
import EditUserInfoModal from '../EditUserInfo/EditUserInfoModal';
import Avatar from './Avatar';
import './UserInfo.scss';
import { fetchAverageRating } from '../../store/users';
import { fetchUserReviews, reviewsErrorsReducer } from '../../store/reviews';

const UserInfo = ({user}) => {
    const dispatch = useDispatch();
    const { username } = useParams();
    const currentUser = useSelector(state => state?.session?.user);
    const showUser = useSelector(state => state?.users[username]);
    const reviews = useSelector(state => state?.reviews)
    // const showUser = useSelector(state => state?.session.user);
    const button = useRef();
    // let avgRating;
    //  = dispatch(fetchAverageRating(username));
    
    
    const [avgRating, setAvgRating] = useState(0);

    const getAverage = async () => {
        let ratings = [];
        showUser?.review_id?.forEach(review => {
            ratings?.push(review?.rating);
        })
        const totalRating = ratings?.reduce((sum, rating) => sum + rating, 0);
        setAvgRating((totalRating / ratings?.length)?.toFixed(2));
        // setAvgRating((await dispatch(fetchAverageRating(username)))?.toFixed(2));
        console.log("average rating for this stupid damn thing", avgRating);
    }


    useEffect(() => {
        getAverage();
        dispatch(fetchUser(username));
        // dispatch(fetchUserReviews(username));
        // avgRating = dispatch(fetchAverageRating(username));
        // console.log("avg rating", avgRating);
    }, [dispatch, username, showUser?.description, currentUser?.profileImageUrl, reviews]);

    // useEffect(() => {
    //     dispatch(fetchUserReviews)
    // }, [])

    console.log("avgRating after useEffect",avgRating)

    return (
        <div className='user-info'>
            <Avatar user={showUser} />
            <div className='user-info-field username'>@{showUser?.username}</div>
            <div className='user-info-field'>{showUser?.description}</div>
            {currentUser?.username === showUser?.username && (
                <div className='user-info-field edit-user-btn' ref={button}>
                    <EditUserInfoModal />
                </div>
            )}
                <div className="user-average-rating">
                    {avgRating}
                    <i className="fa-solid fa-star" style={{ color: `$#e4dfd5` }}></i>
                </div>
        </div>
    )
}

export default UserInfo;