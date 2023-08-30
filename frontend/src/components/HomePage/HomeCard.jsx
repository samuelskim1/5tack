import { useEffect, useRef } from "react";


const HomeCard = () => {
  const logo = useRef();

  useEffect(() => {
    const fadeIn = () => {
      setTimeout(() => {
        logo?.current?.classList.add('fade-in');
      }, 1)
    }

    fadeIn();

    return () => {
      clearTimeout(fadeIn);
    }
  }, []);

  return (
    <div id="home-card">
      <div>
        <h2>5TACK</h2>

        <div className="user-info-divider" />

        <p>
          Begin creating your dream team by exploring our different featured games! 
          Whether you are a professional gamer or casually exploring, we offer a variety of different platforms for you to explore your next virtual adventure. 
        </p>

        {/* <img src="https://cdn.autonomous.ai/static/upload/images/new_post/nice-and-cozy-gaming-setup-tips-4558-1652713505318.webp" alt="" /> */}

        <p>
          If you are unfamiliar with all the different gaming categories or are simply looking for a new genre to explore, check out the brief explanations on your right. 
        </p>
      </div>

      <img src="../../../big-logo.png" alt="BIG 5TACK" ref={logo} />
    </div>
  )
};

export default HomeCard;