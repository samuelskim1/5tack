import { useRef } from 'react';
import EditUserInfoForm from '../EditUserInfo/EditUserInfoForm';
import EditUserInfoModal from '../EditUserInfo/EditUserInfoModal';
import './UserInfo.scss';

const UserInfo = ({ currentUser }) => {
  const button = useRef();

    return (
        <div className='user-info'>
            <h1>{currentUser.username}</h1>
            <h1>{currentUser.description}</h1>
            <h1>{currentUser.email}</h1>
            {/* <EditUserInfoForm currentUser={currentUser} /> */}
            <div ref={button}>
                <EditUserInfoModal currentUser={currentUser} />
            </div>
        </div>
    )
}

export default UserInfo;