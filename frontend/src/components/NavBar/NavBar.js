import { useSelector } from "react-redux";
import './NavBar.css';


const Navbar = () => {
  const loggedIn = useSelector(state => !!state?.session?.user);

  return (
    <>
      {loggedIn && (
        <nav id="auth-nav-container">
          auth nav placeholder
        </nav>
      )}
    </>
  );
};

export default Navbar;