import AuthCards from "../AuthCards/AuthCards";
import HomeCard from "./HomeCard";
import './HomePage.scss';


const HomePage = () => {

  return (
    <AuthCards card1={<HomeCard />} />
  )
};

export default HomePage;