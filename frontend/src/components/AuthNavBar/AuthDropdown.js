import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useRef, useState } from "react";
import { logout } from "../../store/session";
import './AuthDropdown.scss';

const AuthDropdown = () => {
    const currentUser = useSelector(state => state.session?.user);
    const [showDrop, setShowDrop] = useState(false);
    const dropdown = useRef();
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        const closeDrop = (e) => {
            // dropdown is open and dropdown is on page and the click is not inside the dropdown
            if (showDrop && dropdown.current && !dropdown.current.contains(e.target)) {
                setShowDrop(false);
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
                <i className="fa-solid fa-angle-down" onClick={() => setShowDrop(!showDrop)} ></i>
                {showDrop && (
                    <div className="dropdown">
                        <div>
                            {/* <Avatar user={currentUser} />
                            <div> */}
                                <p>{currentUser.username}</p>
                                <p>{currentUser.email}</p>
                            {/* </div> */}
                        </div>
                        {/* <hr></hr> */}
                        <div className="user-info-divider"></div>
                        <p>
                            <Link to={'/about'}>
                                About
                            </Link>
                        </p>
                        <p onClick={handleLogout}>Logout</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AuthDropdown