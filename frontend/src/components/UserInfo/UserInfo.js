import EditUserInfoForm from '../EditUserInfo/EditUserInfoForm';
import './UserInfo.scss';

const UserInfo = ({ currentUser }) => {
    return (
        <div className='user-info'>
            <h1>{currentUser.username}</h1>
            <h1>{currentUser.description}</h1>
            <h1>{currentUser.email}</h1>
            <div>edit profile</div>
            <EditUserInfoForm currentUser={currentUser} />
        </div>
    )
}

export default UserInfo;