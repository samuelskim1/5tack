import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUser } from '../../store/users';
import EditUserInfoModal from '../EditUserInfo/EditUserInfoModal';
import Avatar from './Avatar';
import CreateReviewModal from '../ReviewForms/CreateReviewModal';
import './UserInfo.scss';


const UserInfo = () => {
    const dispatch = useDispatch();
    const { username } = useParams();
    const currentUser = useSelector(state => state?.session?.user);
    const showUser = useSelector(state => state?.users[username]);
    const reviews = useSelector(state => state?.reviews)
    const button = useRef();
    let moodyButton;
    
    
    const [avgRating, setAvgRating] = useState(0);

    const getAverage = async () => {
        if (showUser?.review_id?.length) {
            let ratings = [];
            showUser?.review_id?.forEach(review => {
                ratings?.push(review?.rating);
            })
            const totalRating = ratings?.reduce((sum, rating) => sum + rating, 0);
            setAvgRating((totalRating / ratings?.length)?.toFixed(2));
        } else {
            setAvgRating(0);
        }
    }
    


    useEffect(() => {
        dispatch(fetchUser(username));
    }, [dispatch, username, showUser?.description, currentUser?.profileImageUrl]);

    useEffect(() =>  {
        getAverage();
    }, [reviews, showUser, getAverage])


    if (currentUser?.username === username) {
        moodyButton = <EditUserInfoModal />;
    } else {
        moodyButton = <CreateReviewModal user={showUser} />;
    }
    

    return (
        <div className='user-info'>
            <Avatar user={showUser} />
            {/* <div className='user-info-field edit-user-btn' ref={button}> */}
            <>
                {moodyButton}
            </>
            {/* </div> */}
            <div className='user-info-field username'>@{showUser?.username}</div>
            <div className='user-info-field'>{showUser?.description}</div>

            {(avgRating > 0) && (
                <div className='user-average-rating'>
                    {avgRating}
                    <i className="fa-solid fa-star" style={{ color: `$#e4dfd5` }}></i>
                </div>
            )}
            {(avgRating === 0) && (showUser?.username !== currentUser?.username) && (
                <div className='no-reviews'>
                    {"Be the first to leave a review! :)"}
                </div>
            )}
            
        </div>
    )
}

export default UserInfo;