import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './AuthNavBar.scss';
import CategoryNav from './CategoryNav';

const AuthNavBar = () => {
    return (
        <nav id='nav-container'>
            <div id="nav-content-container">
                <img id='icon' src='../../../apple-touch-icon.png' />
                <CategoryNav />
                <img id='temp-avatar' src='../../../cleffa.jpg' />
            </div>
        </nav>
    )
}

export default AuthNavBar;