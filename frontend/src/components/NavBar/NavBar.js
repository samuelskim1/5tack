import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './NavBar.scss';
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import CategoryNav from "./CategoryNav";

const Navbar = () => {
  const loggedIn = useSelector(state => !!state?.session?.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <>
      {loggedIn && (
        <nav id="nav-container">
          <div className="upper-nav" >
            <Link to="/demo">go to demo profile</Link>
            <div className="logout-btn" onClick={handleLogout} >Logout</div>
          </div>
          {/* <div className="lower-nav">
            <p>---------------- this is where categories will go ----------------------</p>
          </div> */}
          <CategoryNav />
        </nav>
      )}
    </>
  );
};

export default Navbar;