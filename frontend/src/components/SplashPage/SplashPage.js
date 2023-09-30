import { useEffect, useRef, useState } from "react";
import UnauthNav from "../UnauthNav/UnauthNav";
import './SplashPage.scss';
import SplashCard from "./SplashCard";
import { Modal } from "../../context/modal";
import LoginForm from "../SessionForms/LoginForm";
import SignupForm from "../SessionForms/SignupForm";

const SplashPage = () => {
  // const postsCard = useRef();
  // const reviewsCard = useRef();

  // useEffect(() => {
  //   const fadeIn = () => {
  //     setTimeout(() => {
  //       postsCard?.current?.classList.remove('hidden');
  //       postsCard?.current?.classList.add('fade-in');
  //       reviewsCard?.current?.classList.remove('hidden');
  //       reviewsCard?.current?.classList.add('fade-in');
  //     }, 2200)
  //   }

  //   fadeIn();

  //   return () => {
  //     clearTimeout(fadeIn);
  //   }
  // }, [])

  const [showLogin, setShowLogin] = useState(false);
  
  const splashContent = [
    {
      section: 'profile',
      title: 'Customize Your Profile',
      // text: 'Let the community know who you are by specifying details like play style and favorite games.',
      // title: 'Craft Your Gaming Identity',
      text: 'Let the 5TACK community know who you are by sharing your play style, favorite games, and more.',
      image: "../../../edit_profile.mov"
    }, {
      section: 'post',
      title: 'Create your Own 5TACK',
      text: 'Broadcast your game plan and invite like-minded players to join your team.',
      image: '../../../create_post.mov'
    }, {
      section: 'comment',
      title: 'Join a Discussion',
      text: 'Voice your interest in joining the team by dropping a comment below the post.',
      image: "../../../create_comment.mov"
    }, {
      section: 'review',
      title: 'Review Your Teammate',
      text: 'Provide valuable feedback on your gaming experience to help build a better gaming community.',
      image: '../../../scroll_reviews.mov'
    },    
  ];

  return (
    <div id="splash-page">
  
    <div className="splash-section">
      <div className="splash-section-card">
        <p>The Solo Queue Struggles End Here</p>
        {/* <p>The description about the purpose of our site. For them loser adult gamers whose friends dont have time to play with them anymore. You can let people know what kind of gaming experience you’re looking for. Look for players in your favorite games by posting or commenting. And what a 5 stack is...</p> */}
        <p>
        5TACK is a platform that empowers players to connect with the right individuals for a great gaming experience. Your friends are busy, you have terrible luck with random players, or you're just looking to expand your gaming circle. Finding teammates for multiplayer games can be a struggle and 5TACK is here to fix that. So what is a 5-stack? Our name originates from the common team size of five in many multiplayer games, and our mission is to help complete your stack, five or otherwise, and form your dream team.</p>
        <p className="style-button" onClick={() => setShowLogin(true)}>Sign up now!</p>
        {showLogin && 
        <Modal onClose={() => setShowLogin(false)} >
          <LoginForm />
        </Modal>
      }
      </div>
      <div className="splash-section-card">
        <div>
          <a href='#profile'>
            <i className="fa-regular fa-user" />
            Profile
          </a>
          <a href='#post'>
            <i className="fa-regular fa-pen-to-square" />
            Post
          </a>
          <a href='#comment'>
            <i className="fa-regular fa-message" />
            Comment
          </a>
          <a href='#review'>
            <i className="fa-regular fa-star" />
            Review
          </a>
        </div>
        <a href="#profile">
          <p>Scroll down to learn more!</p>
          <i className="fa-solid fa-angles-down" />
        </a>
      </div>
    </div>

      {splashContent.map((section, i) => (
        // console.log(section, i)
        <SplashCard info={section} key={i} />
      ))}

      <div className="splash-section last-section">
        <div className="splash-section-card">
          <p>Your Dream Team Awaits!</p>
          <p>Sign Up and Build Your 5TACK Today!</p>
        </div>
        <SignupForm />
      </div>

    </div>
  )
}

export default SplashPage;