import { useEffect, useRef, useState } from "react";
import LoginModal from "../SessionForms/LoginModal";

const UnauthNav = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const bar = useRef();
  

  useEffect(() => {
    setTimeout(() => {
      bar?.current?.classList.add('fade-in')
    }, 0)
  }, [])

  return (
    <>
      <nav id="unauth-nav-container" ref={bar}>
        <div id="unauth-button-container">
          <div
            id="login-btn"
            onClick={() => setShowLogin(true)}
          >
            Log in
          </div>

          <div
            id="signup-btn"
            onClick={() => setShowSignup(true)}
            >
            Sign up
          </div>
        </div>
      </nav>

      {showLogin && (
        <LoginModal onClose={() => setShowLogin(false)} />
      )}
      {/* {showSignup} */}
    </>
  );
};

export default UnauthNav;