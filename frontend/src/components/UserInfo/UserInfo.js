import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUser } from '../../store/users';
import EditUserInfoModal from '../EditUserInfo/EditUserInfoModal';
import Avatar from './Avatar';
import './UserInfo.scss';
import { fetchAverageRating } from '../../store/users';

const UserInfo = ({user}) => {
    const dispatch = useDispatch();
    const { username } = useParams();
    const currentUser = useSelector(state => state?.session?.user);
    const showUser = useSelector(state => state?.users[username]);
    // const showUser = useSelector(state => state?.session.user);
    const button = useRef();
    // let avgRating;
    //  = dispatch(fetchAverageRating(username));
    
    const [avgRating, setAvgRating] = useState(user?.avgRating);
    console.log(user?.avgRating);
    const getAverage = async () => {
        setAvgRating((await dispatch(fetchAverageRating(username)))?.toFixed(2));
        console.log("average rating for this stupid damn thing", avgRating);
    }

    useEffect(() => {
        getAverage();
        dispatch(fetchUser(username));
        // avgRating = dispatch(fetchAverageRating(username));
        // console.log("avg rating", avgRating);
    }, [dispatch, username, showUser?.description, currentUser?.profileImageUrl]);


    return (
        <div className='user-info'>
            <Avatar user={showUser} />
            <div className='user-info-field username'>@{showUser?.username}</div>
            <div>{avgRating}</div>
            <div className='user-info-field'>{showUser?.description}</div>
            {currentUser?.username === showUser?.username && (
                <div className='user-info-field edit-user-btn' ref={button}>
                    <EditUserInfoModal />
                </div>
            )}
        </div>
    )
}

export default UserInfo;