import UserCard from "./UserCard";
import AuthCards from "../AuthCards/AuthCards";
import './Profile.scss';
import RevPostCard from "./RevPostCard/RevPostCard";
import { useState } from "react";


const Profile = () => {
  const [selectedTab, setSelectedTab] = useState('posts');


  return (
    <AuthCards 
      card1={<UserCard setSelectedTab={setSelectedTab} />} 
      card2={<RevPostCard selectedTab={selectedTab} setSelectedTab={setSelectedTab} />} 
      />
  )
};

export default Profile;