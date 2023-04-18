import { useSelector } from "react-redux";
import UnauthNav from "./UnauthNav";
import AuthNav from "./AuthNav";
import './NavBar.css';


const Navbar = () => {
  const loggedIn = useSelector(state => !!state?.session?.user);
  const nav = loggedIn ? <AuthNav /> : <UnauthNav />;

  return (
    <>
      {nav}
    </>
  );
};

export default Navbar;