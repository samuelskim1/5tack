import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import './NavBar.scss';
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import CategoryNav from "./CategoryNav";
import { useEffect } from "react";
import { fetchCategories } from "../../store/categories";
import { fetchAllPosts } from "../../store/posts";
import { fetchGames } from "../../store/games";
import { fetchAllUsers } from "../../store/users";
import Avatar from "../../components/UserInfo/Avatar";
import { fetchAllComments } from "../../store/comments";

const Navbar = () => {
  const loggedIn = useSelector(state => !!state?.session?.user);
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchAllPosts());
    dispatch(fetchGames());
    dispatch(fetchAllComments())
    dispatch(fetchAllUsers());
  }, [loggedIn]);

  const handleLogout = () => {
    dispatch(logout());
    history.push('/');
  }

  return (
    <>
      {!loggedIn && (
        <button className="about-button">
          <Link to="/" className="about-go-back">
            Go Back
          </Link>
        </button>
      )}
      {loggedIn && (
        <button className="about-button">
          <Link to="/about" className="meet-the-team">
            Meet the Team
          </Link>
        </button>
      )}
      {loggedIn && (
        <nav id="nav-container">
          <div className="inner-nav">
            <div className="upper-nav" >
              <Link to="/home" id="nav-title">5TACK</Link>
              <Link className="profile-link" to="/demo">
                {/* <p>go to demo profile</p> */}
                <Avatar user={user} />
              </Link>
              <div id="nav-welcome">Welcome back, {user?.username}!</div>
            </div>
            <div className="line-divider"/>
            <div className="lower-nav">
              {/* <p>---------------- this is where categories will go ----------------------</p> */}
              <CategoryNav />
            </div>
            <div className="line-divider" />
            <div className="logout-btn" onClick={handleLogout} >Logout</div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;