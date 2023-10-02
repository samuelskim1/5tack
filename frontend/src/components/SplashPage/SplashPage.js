import { useState } from "react";
import './SplashPage.scss';
import SplashCard from "./SplashCard";
import { Modal } from "../../context/modal";
import LoginForm from "../SessionForms/LoginForm";
import SignupForm from "../SessionForms/SignupForm";

const SplashPage = () => {

  const [showLogin, setShowLogin] = useState(false);
  
  const splashContent = [
    {
      section: 'profile',
      title: 'Customize Your Profile',
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
        <p>
        5TACK is a platform that empowers players to connect with the right individuals for a great gaming experience. 
        Your friends are busy, you have terrible luck with random players, or you're just looking to expand your gaming circle. 
        Finding teammates for multiplayer games can be a struggle and 5TACK is here to fix that. 
        So what is a five-stack? Our name originates from the common team size of five in many multiplayer games, and our mission is to help complete your stack, five or otherwise, and form your dream team.</p>
        <p className="style-button" onClick={() => setShowLogin(true)}>Sign up now!</p>
        {showLogin && 
        <Modal onClose={() => setShowLogin(false)} >
          <LoginForm />
        </Modal>
      }
      </div>
      <div className="splash-section-card">
        <a href='#profile' className="profile-tab">
          Customize your profile
        </a>
        <a href='#post' className="post-tab">
          Create your own 5TACK
        </a>
        <a href='#comment' className="comment-tab">
          Join a discussion
        </a>
        <a href='#review' className="review-tab">
          Review your teammate
        </a>
        <a href="#profile" className="scroll-tab">
          <p>Scroll down to learn more!</p>
          <i className="fa-solid fa-angles-down" />
        </a>
      </div>
    </div>

      {splashContent.map((section, i) => (
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