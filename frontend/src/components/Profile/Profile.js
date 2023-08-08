import UserCard from "./UserCard";
import AuthCards from "../AuthCards/AuthCards";
import './Profile.scss';


const Profile = () => {

  return (
    <AuthCards card1={<UserCard />} />
  )
};

export default Profile;