import { useEffect, useRef, useState } from "react";
import LoginModal from "../SessionForms/LoginModal";
import SignupModal from "../SessionForms/SignupModal";

const UnauthNav = () => {
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