import { useRef } from 'react';
import EditUserInfoForm from '../EditUserInfo/EditUserInfoForm';
import EditUserInfoModal from '../EditUserInfo/EditUserInfoModal';
import './UserInfo.scss';
import Avatar from './Avatar';

const UserInfo = ({ currentUser }) => {
  const button = useRef();

    return (
        <div className='user-info'>
            <Avatar user={currentUser} />
            <div className='user-info-field username'>{currentUser.username}</div>
            <div className='user-info-field'>{currentUser.description}</div>
            {/* <div className='user-info-field email'>{currentUser.email}</div> */}
            {/* <EditUserInfoForm currentUser={currentUser} /> */}
            <div className='user-info-field edit-user-btn' ref={button}>
                <EditUserInfoModal currentUser={currentUser} />
            </div>
        </div>
    )
}

export default UserInfo;