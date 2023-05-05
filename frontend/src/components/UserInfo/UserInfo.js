import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUser } from '../../store/users';
import EditUserInfoModal from '../EditUserInfo/EditUserInfoModal';
import Avatar from './Avatar';
import CreateReviewModal from '../ReviewForms/CreateReviewModal';
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
    let moodyButton;
    // let avgRating;
    //  = dispatch(fetchAverageRating(username));
    
    
    const [avgRating, setAvgRating] = useState(0);

    const getAverage = async () => {
        // dispatch(fetchUser(username));
        console.log("getAverage is running");
        let ratings = [];
        console.log("this is the reviews for showUser", showUser?.review_id);
        showUser?.review_id?.forEach(review => {
            ratings?.push(review?.rating);
        })
        const totalRating = ratings?.reduce((sum, rating) => sum + rating, 0);
        setAvgRating((totalRating / ratings?.length)?.toFixed(2));
        console.log("new average rating", avgRating);
    }
    


    useEffect(() => {
        dispatch(fetchUser(username));
    }, [dispatch, username, showUser?.description, currentUser?.profileImageUrl]);

    useEffect(() =>  {
        getAverage();
    }, [reviews,showUser,username ])


    console.log("avgRating after useEffect",avgRating)
    console.log("reviews slice of state after useEffect", reviews);


    if (currentUser?.username === username) {
        moodyButton = <EditUserInfoModal />;
    } else {
        moodyButton = <CreateReviewModal user={showUser} />;
    }
    

    return (
        <div className='user-info'>
            <Avatar user={showUser} />
            <div className='user-info-field username'>@{showUser?.username}</div>
            <div className='user-info-field'>{showUser?.description}</div>
            <div className='user-info-field edit-user-btn' ref={button}>
                {moodyButton}
            </div>
            <div className="user-average-rating">
                {avgRating}
                <i className="fa-solid fa-star" style={{ color: `$#e4dfd5` }}></i>
            </div>
            
        </div>
    )
}

export default UserInfo;