import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './NavBar.css';


const Navbar = () => {
  const loggedIn = useSelector(state => !!state?.session?.user);

  return (
    <>
      {loggedIn && (
        <nav id="nav-container">
          <Link to="/demo">go to demo profile</Link>
        </nav>
      )}
    </>
  );
};

export default Navbar;