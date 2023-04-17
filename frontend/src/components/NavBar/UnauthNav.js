import { useEffect, useRef, useState } from "react";
import LoginModal from "../SessionForms/LoginModal";
import SignupModal from "../SessionForms/SignupModal";

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
          <LoginModal />
          <SignupModal />
        </div>
      </nav>
    </>
  );
};

export default UnauthNav;