import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import LoginForm from '../SessionForms/LoginForm';
import SignupForm from '../SessionForms/SignupForm';
import { Modal } from '../../context/modal';
import './UnauthNav.scss';

const UnauthNav = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const T = useRef();
  const A = useRef();
  const C = useRef();
  const K = useRef();
  const slogan = useRef();

  useEffect(() => {
    setTimeout(() => {
      T?.current?.classList.remove('hidden');
      T?.current?.classList.add('animated');
    }, 300);
    setTimeout(() => {
      A?.current?.classList.remove('hidden');
      A?.current?.classList.add('animated');
    }, 600);  
    setTimeout(() => {
      C?.current?.classList.remove('hidden');
      C?.current?.classList.add('animated');
    }, 900);
    setTimeout(() => {
      K?.current?.classList.remove('hidden');
      K?.current?.classList.add('animated');
    }, 1200);

    setTimeout(() => {
      slogan?.current?.classList.remove('hidden');
      slogan?.current?.classList.add('animated');
    }, 2200)
  }, [])

  return (
    <>
      <nav id="unauth-nav">
        <div id="unauth-content-container">
          <div id="unauth-title">
            <Link to="/">
              <img src="../../../apple-touch-icon.png" alt="5TACK logo" />
            </Link>

            <Link to="/">
              <h1 className="animated bounce-in-right">5</h1>
              <h1 className="hidden bounce-in-right" ref={T}>T</h1>
              <h1 className="hidden bounce-in-right" ref={A}>A</h1>
              <h1 className="hidden bounce-in-right" ref={C}>C</h1>
              <h1 className="hidden bounce-in-right" ref={K}>K</h1>
            </Link>

            <h2 className='hidden fade-in-right' ref={slogan}> where gamers unite against toxicity</h2>
          </div>

          <ul id="unauth-buttons-holder">
            <li onClick={() => setShowLogin(true)}>
              Log in
            </li>

            <li onClick={() => setShowSignup(true)}>
              Sign up
            </li>

            <li>
              About us
            </li>
          </ul>
        </div>
      </nav>
      {showLogin && 
        <Modal onClose={() => setShowLogin(false)} >
          <LoginForm />
        </Modal>
      }
      {showSignup && 
        <Modal onClose={() => setShowSignup(false)} >
          <SignupForm />
        </Modal>
      }
    </>
  )
}

export default UnauthNav;