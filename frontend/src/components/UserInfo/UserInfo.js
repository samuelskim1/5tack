import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUser } from '../../store/users';
import EditUserInfoModal from '../EditUserInfo/EditUserInfoModal';
import Avatar from './Avatar';
import './UserInfo.scss';

const UserInfo = () => {
    const dispatch = useDispatch();
    const { username } = useParams();
    const currentUser = useSelector(state => state?.session?.user);
    const showUser = useSelector(state => state?.users[username]);
    // const showUser = useSelector(state => state?.session.user);
    const button = useRef();

    useEffect(() => {
        dispatch(fetchUser(username));
    }, [dispatch, username, showUser?.description, currentUser?.profileImageUrl]);


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
        </div>
    )
}

export default UserInfo;