import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useRef, useState } from "react";
import { logout } from "../../store/session";
import './AuthDropdown.scss';

const AuthDropdown = () => {
    const currentUser = useSelector(state => state.session?.user);
    const [showDrop, setShowDrop] = useState(false);
    const [showFav, setShowFav] = useState(false);
    const dropdown = useRef();
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        const closeDrop = (e) => {
            // dropdown is open and dropdown is on page and the click is not inside the dropdown
            if (showDrop && dropdown.current && !dropdown.current.contains(e.target)) {
                console.log('when the fuck is this happening')
                setShowDrop(false);
                setShowFav(false);
            }
        }

        document.addEventListener("mousedown", closeDrop);

        return () => {
            document.removeEventListener("mousedown", closeDrop);
        }

    }, [showDrop]);

    const handleLogout = () => {
        dispatch(logout());
        history.push('/');
    }

    return (
        <div className="nav-dropdown-container">
            <Link
            to={`/${currentUser?.username}`}>
                <img src={currentUser?.profileImageUrl} />
            </Link>
            <div className="dropdown-container" ref={dropdown}>
                <i className="fa-solid fa-angle-down" onClick={() => {setShowDrop(!showDrop); setShowFav(false)}} ></i>
                {showDrop && (
                    <div className="dropdown">
                            <p className="drop-title">Welcome back!</p>
                            <p className="drop-link">@{currentUser?.username}</p>
                            <div className="user-info-divider"></div>
                        {!!(currentUser?.favorites?.length && currentUser?.favorites[0] !== '') &&
                            <>
                                <div className="drop-link" onClick={() => setShowFav(!showFav)} >
                                    <p>My Favorites</p>
                                    <i className="fa-solid fa-angle-down" ></i>
                                </div>
                                {showFav && 
                                <>
                                    {currentUser?.favorites.map((fav, i) => (
                                        <Link className='drop-link fav' to={`/games/${fav.split(' ').join('')}`} key={i}>
                                            {fav}
                                        </Link>
                                        ))}
                                    <div className="user-info-divider"></div>
                                </>}
                            </>
                        }
                            <Link className='drop-link' to={'/about'}>
                                About
                            </Link>
                        <p className="drop-link" onClick={handleLogout}>Logout</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AuthDropdown