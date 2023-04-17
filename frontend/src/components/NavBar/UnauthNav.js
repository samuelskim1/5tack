import { useEffect, useRef } from "react";


const UnauthNav = () => {
  const bar = useRef();

  useEffect(() => {
    setTimeout(() => {
      bar?.current?.classList.add('fade-in')
    }, 0)
  }, [])

  return (
    <nav id="unauth-nav-container" ref={bar}>
      <div id="unauth-button-container">
        <div id="login-btn">
          Log in
        </div>
        <div id="signup-btn">
          Sign up
        </div>
      </div>
    </nav>
  );
};

export default UnauthNav;