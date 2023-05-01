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
      {loggedIn && (
        <nav id="nav-container">
          <div id="nav-title">
            <Link to="/home">5TACK</Link>
          </div>
          <Link className="profile-link" to={`/${user.username}`}>
            {/* <p>go to demo profile</p> */}
            <Avatar user={user} />
          </Link>
          <div id="nav-welcome">Welcome back, {user?.username}!</div>
          <ul id="category-container">
            <CategoryNav />
          </ul>
          <div className="logout-btn" onClick={handleLogout}>Logout</div>
        </nav>
      )}
    </>
  );
};

export default Navbar;