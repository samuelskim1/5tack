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
      title: 'customize your profile',
      // text: 'Something something and more stuff about the stuff wow stuff and stuff and yeah about this length?',
      text: 'Let the community know who you are by specifying details like play style and favorite games.',
      image: "../../../edit_profile.mov"
    }, {
      title: 'create a post',
      text: 'Attract players to join your team or browse to find a ',
      image: '../../../create_post.mov'
    }, {
      title: 'join a discussion',
      text: 'Something something and more stuff about the stuff wow stuff and stuff and yeah about this length?',
      image: "../../../create_comment.mov"
    }, {
      title: 'title about reviews',
      text: 'Something something and more stuff about the stuff wow stuff and stuff and yeah about this length?',
      image: '../../../scroll_reviews.mov'
    },    
  ];

  return (
    <div id="splash-page">
  
    <div className="splash-section">
      <div className="splash-section-card">
        <p>the cool and catchy title that's about ye long</p>
        <p>The description about the purpose of our site. For them loser adult gamers whose friends dont have time to play with them anymore. You can let people know what kind of gaming experience you’re looking for. Look for players in your favorite games by posting or commenting. And what a 5 stack is...</p>
        <p className="style-button" onClick={() => setShowLogin(true)}>Sign up now!</p>
        {showLogin && 
        <Modal onClose={() => setShowLogin(false)} >
          <LoginForm />
        </Modal>
      }
      </div>
      <div className="splash-section-card">
        <div>
          <a href='#section-1'>
            <i className="fa-regular fa-user" />
            Profile
          </a>
          <a href='#section-2'>
            <i className="fa-regular fa-pen-to-square" />
            Post
          </a>
          <a href='#section-3'>
            <i className="fa-regular fa-message" />
            Comment
          </a>
          <a href='#section-4'>
            <i className="fa-regular fa-star" />
            Review
          </a>
        </div>
        <span>
          <p>Scroll down to learn more!</p>
          <i className="fa-solid fa-angles-down" />
        </span>
      </div>
    </div>

      {splashContent.map((section, i) => (
        // console.log(section, i)
        <SplashCard info={section} key={i} index={i + 1} />
      ))}

      <div className="splash-section last-section">
        <div className="splash-section-card">
          <p>Create Your Own Stack Now!</p>
          <p>test</p>
        </div>
        <SignupForm />
      </div>

    </div>
  )
}

export default SplashPage;