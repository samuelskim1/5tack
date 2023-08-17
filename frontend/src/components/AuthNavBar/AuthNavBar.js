import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './AuthNavBar.scss';
import CategoryNav from './CategoryNav';
import AuthDropdown from './AuthDropdown';

const AuthNavBar = () => {
    return (
        <nav id='nav-container'>
            <div id="nav-content-container">
                <Link
                to='/home'>
                    <img id='icon' src='../../../apple-touch-icon.png' />
                </Link>
                <CategoryNav />
                <AuthDropdown />
            </div>
        </nav>
    )
}

export default AuthNavBar;