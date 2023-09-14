import AuthCards from "../AuthCards/AuthCards";
import CategoriesList from "./CategoriesList";
import HomeCard from "./HomeCard";
import './HomePage.scss';


const HomePage = () => {

  return (
    <AuthCards 
      card1={<HomeCard />} 
      card2={<CategoriesList />}
      />
  )
};

export default HomePage;