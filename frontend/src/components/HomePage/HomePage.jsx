import AuthCards from "../AuthCards/AuthCards";
import SearchBar from "./SearchBar";


const HomePage = () => {

  return (
    <AuthCards card1={<SearchBar />} />
  )
};

export default HomePage;