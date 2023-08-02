import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './UnauthNav.scss';

const UnauthNav = () => {

  return (
    <nav id="unauth-nav">
      <div id="unauth-content-container">
        <div id="unauth-title">
          <Link to="/">
            <img src="../../../apple-touch-icon.png"></img>
          </Link>

          <Link to="/">
            <h1>5TACK</h1>
          </Link>

          <Link to="/"> 
            <h2> where gamers unite against toxicity</h2>
          </Link>
        </div>

        <ul id="unauth-buttons-holder">
          <li>
            Log in
          </li>

          <li>
            Sign up
          </li>

          <li>
            About us
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default UnauthNav;